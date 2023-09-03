import { mkdir, stat, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import { Options as PrettierOptions, format } from 'prettier';
import { Project, Scope, SyntaxKind } from 'ts-morph';
import prettierOptions from '../.prettierrc.json';

const rootDirectory = resolve(__dirname, '..');
const fakerPackageDirectory = join(
  rootDirectory,
  'node_modules',
  '@faker-js/faker',
);
const fakerTypesDirectory = join(fakerPackageDirectory, 'dist', 'types');
const fakerModulesDirectory = join(fakerTypesDirectory, 'modules');
const fakerFile = join(fakerTypesDirectory, 'faker.d.ts');

async function generateCommandText(
  name: string,
  description: string,
): Promise<string> {
  const simplyDescription = (description.split('\n')[0] ?? '')
    // replaces MD links wih the plain text part
    // .replace(/\[(.+?(?=\]))\]\(.+?(?=\))\)/g, '$1')
    .replace(/("|`)/g, '\\$1');

  return format(
    `import { Command } from 'commander';

  const command = new Command("${name}").description(\`${simplyDescription}\`);

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
    if (module.getScope() !== Scope.Public) {
      continue;
    }

    if (
      module
        .getJsDocs()
        .some((doc) =>
          doc
            .getTags()
            .some((tag) => tag.isKind(SyntaxKind.JSDocDeprecatedTag)),
        )
    ) {
      continue;
    }

    const definitionsNames = ['rawDefinitions', 'definitions'];
    if (definitionsNames.includes(module.getName())) {
      continue;
    }

    const unusableModules = ['helpers'];
    if (unusableModules.includes(module.getName())) {
      continue;
    }

    const moduleName = module.getName();
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

    await checkIfExistOrCreate(getModuleDir(moduleName));
    await writeModuleCommand(
      moduleName,
      await generateCommandText(
        moduleName,
        moduleClass.getJsDocs()[0].getCommentText() ?? '',
      ),
    );

    for (const method of moduleClass.getMethods()) {
      const docs = method.getJsDocs();
      const doc = docs[docs.length - 1];
      const description = doc.getCommentText() ?? '';
      console.log(method.getName(), '-', description);
      const params = doc
        .getTags()
        .filter((tag) => tag.isKind(SyntaxKind.JSDocParameterTag));
      console.group();
      for (const param of params) {
        console.log(param.getTagName(), param.getCommentText());
      }
      console.groupEnd();
    }
    console.groupEnd();
  }
}

main().catch((error) => console.error(error));
