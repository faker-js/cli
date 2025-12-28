import { Command } from 'commander';
import { description, version } from '../package.json';
import { ArgumentError } from './errors/argument.error';
import { ReferenceError } from './errors/reference.error';

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
      if (typeof entry !== 'function') {
        throw new ReferenceError('function', functionName);
      }

      // TODO: Need to figure out how to strictly type this function call
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      console.log(entry());
    });

  program.parse(args);

  const hasArgs = args.length > 2;
  if (!hasArgs) {
    program.help();
  }
}
