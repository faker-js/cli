import { mkdir, stat, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import { Options as PrettierOptions, format } from 'prettier';
import { Project, Scope } from 'ts-morph';
import prettierOptions from '../.prettierrc.json';
import { isDeprecated } from './jsdoc-helper';

const rootDirectory = resolve(__dirname, '..');
const fakerPackageDirectory = join(
  rootDirectory,
  'node_modules',
  '@faker-js/faker',
);
const fakerTypesDirectory = join(fakerPackageDirectory, 'dist', 'types');
const fakerModulesDirectory = join(fakerTypesDirectory, 'modules');
const fakerFile = join(fakerTypesDirectory, 'faker.d.ts');

async function generateModuleCommandText(
  name: string,
  description: string,
  subCommands: string[],
): Promise<string> {
  const simplyDescription = (description.split('\n')[0] ?? '').replace(
    /("|`)/g,
    '\\$1',
  );

  return format(
    `import { Command } from 'commander';
${subCommands
  .map((commandName) => `import ${commandName}Command from './${commandName}';`)
  .join('\n')}

const command = new Command("${name}")
  .description(\`${simplyDescription}\`)
  ${
    subCommands
      .map((commandName) => `.addCommand(${commandName}Command)`)
      .join('\n') + ';'
  }

export default command;`,
    {
      ...(prettierOptions as PrettierOptions),
      parser: 'typescript',
    },
  );
}

async function generateMethodCommandText(
  moduleName: string,
  methodName: string,
  description: string,
): Promise<string> {
  const simplyDescription = (description.split('\n')[0] ?? '').replace(
    /("|`)/g,
    '\\$1',
  );

  return format(
    `import { Command } from 'commander';

const command = new Command("${methodName}")
  .description(\`${simplyDescription}\`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.${moduleName}.${methodName}());
  });

export default command;`,
    {
      ...(prettierOptions as PrettierOptions),
      parser: 'typescript',
    },
  );
}

function getModuleDir(moduleName: string) {
  return join(rootDirectory, 'src', 'commands', moduleName);
}

function getModuleFilePath(moduleName: string) {
  return join(getModuleDir(moduleName), 'index.ts');
}

async function writeModuleCommand(moduleName: string, text: string) {
  await checkIfExistOrCreate(getModuleDir(moduleName));
  await writeFile(getModuleFilePath(moduleName), text);
}

function getMethodFilePath(moduleName: string, methodName: string) {
  return join(getModuleDir(moduleName), `${methodName}.ts`);
}

async function writeMethodCommand(
  moduleName: string,
  methodName: string,
  text: string,
) {
  await checkIfExistOrCreate(getModuleDir(moduleName));
  await writeFile(getMethodFilePath(moduleName, methodName), text);
}

async function checkIfExistOrCreate(dirPath: string) {
  await stat(dirPath).catch(async () => {
    await mkdir(dirPath, { recursive: true });
  });
}

async function main() {
  const project = new Project({
    useInMemoryFileSystem: false,
    skipAddingFilesFromTsConfig: true,
  });

  const file = project.addSourceFileAtPath(fakerFile);
  const faker = file.getClassOrThrow('Faker');
  for (const module of faker.getProperties()) {
    const moduleName = module.getName();
    if (module.getScope() !== Scope.Public) {
      continue;
    }

    if (module.getJsDocs().some(isDeprecated)) {
      continue;
    }

    const definitionsNames = ['rawDefinitions', 'definitions'];
    if (definitionsNames.includes(moduleName)) {
      continue;
    }

    const unusableModules = ['helpers'];
    if (unusableModules.includes(moduleName)) {
      continue;
    }

    console.group(moduleName);
    const fakerModuleFilePath = join(
      fakerModulesDirectory,
      moduleName,
      'index.d.ts',
    );
    const moduleClassName = module.getTypeNodeOrThrow().compilerNode.getText();
    const moduleClass = project
      .addSourceFileAtPath(fakerModuleFilePath)
      .getClassOrThrow(moduleClassName);

    const subCommands = new Set<string>();
    for (const method of moduleClass.getMethods()) {
      const methodName = method.getName();
      const brokenMethods = ['between', 'betweens', 'fromCharacters'];
      if (brokenMethods.includes(methodName)) {
        continue;
      }

      if (subCommands.has(methodName)) {
        continue;
      }

      const docs = method.getJsDocs();
      const doc = docs[docs.length - 1];
      const methodDescription = doc.getCommentText() ?? '';
      console.log(method.getName(), '-', methodDescription);
      await writeMethodCommand(
        moduleName,
        methodName,
        await generateMethodCommandText(
          moduleName,
          methodName,
          methodDescription,
        ),
      );
      subCommands.add(methodName);
    }

    await writeModuleCommand(
      moduleName,
      await generateModuleCommandText(
        moduleName,
        moduleClass.getJsDocs()[0].getCommentText() ?? '',
        [...subCommands],
      ),
    );
    console.groupEnd();
  }
}

main().catch((error) => console.error(error));
