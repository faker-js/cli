import { Command } from 'commander';
import { description, version } from '../package.json';
import { ArgumentError } from './errors/argument.error';
import { ReferenceError } from './errors/reference.error';

type AnyFunction = (...args: unknown[]) => unknown;

function isAnyFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function';
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
        throw new ArgumentError('moduleName', moduleName);
      }

      if (typeof functionName !== 'string') {
        throw new ArgumentError('functionName', functionName);
      }

      const { faker } = await import('@faker-js/faker/locale/en');
      const moduleRef = getValueByKey(faker, moduleName);
      if (typeof moduleRef !== 'object' || moduleRef === null) {
        throw new ReferenceError('module', moduleName);
      }

      const entry = getValueByKey(moduleRef, functionName);
      if (!isAnyFunction(entry)) {
        throw new ReferenceError('function', functionName);
      }

      console.log(entry());
    });

  program.parse(args);

  const hasArgs = args.length > 2;
  if (!hasArgs) {
    program.help();
  }
}
