import { Command } from 'commander';
import { description, version } from '../package.json';
import { API } from './api';
import { ArgumentError } from './errors/argument.error';
import { ReferenceError } from './errors/reference.error';

export function cli(args: string[]) {
  const program = new Command()
    .name('faker')
    .version(version)
    .description(description)
    .argument('<moduleName>', 'The name of the module to invoke.')
    .argument('<functionName>', 'The name of the function to invoke.')
    .action((moduleName, functionName) => {
      if (typeof moduleName !== 'string') {
        throw new ArgumentError('moduleName', moduleName);
      }

      const moduleRef = API[moduleName];
      if (moduleRef === undefined) {
        throw new ReferenceError('module', moduleName);
      }

      if (typeof functionName !== 'string') {
        throw new ArgumentError('functionName', functionName);
      }

      const entryRef = moduleRef[functionName];
      if (entryRef === undefined) {
        throw new ReferenceError('function', moduleName);
      }

      console.log(entryRef());
    });

  const hasArgs = args.length > 2;
  if (!hasArgs) {
    program.help();
  } else {
    program.parse(args);
  }
}
