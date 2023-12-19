import { Command } from 'commander';
import { description, version } from '../package.json';

type AnyFunction = (...args: unknown[]) => unknown;

function isAnyFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function';
}

function createArgumentError(
  argumentName: string,
  originalValue: unknown,
): Error {
  return new Error(
    `Invalid "${argumentName}" argument. A string value is required but found ${JSON.stringify(
      originalValue,
    )}.`,
  );
}

function getValueByKey(obj: object, key: string): unknown {
  return Object.entries(obj)
    .find(([objectKey]) => objectKey === key)
    ?.at(1);
}

export function cli(args: string[]) {
  const program = new Command()
    .name('faker')
    .version(version)
    .description(description)
    .argument('<moduleName>', 'The name of the module to invoke.')
    .argument('<functionName>', 'The name of the function to invoke.')
    .action(async (moduleName, functionName) => {
      if (typeof moduleName !== 'string') {
        throw createArgumentError('moduleName', moduleName);
      }

      if (typeof functionName !== 'string') {
        throw createArgumentError('functionName', functionName);
      }

      const { faker } = await import('@faker-js/faker/locale/en');
      const moduleRef: unknown = getValueByKey(faker, moduleName);
      if (typeof moduleRef !== 'object' || moduleRef === null) {
        throw new Error(`There is no module with the name "${moduleName}".`);
      }

      const entry: unknown = getValueByKey(moduleRef, functionName);
      if (!isAnyFunction(entry)) {
        throw new Error(
          `There is no function with the name "${functionName}".`,
        );
      }

      console.log(entry());
    });

  program.parse(args);

  const hasArgs = args.length > 2;
  if (!hasArgs) {
    program.help();
  }
}
