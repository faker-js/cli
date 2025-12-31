import { Command } from 'commander';
import packageJson from '../package.json' with { type: 'json' };
import { API } from './api.js';
import { ArgumentError } from './errors/argument.error.js';
import { ReferenceError } from './errors/reference.error.js';

function buildProgram(): Command {
  return new Command()
    .name('faker')
    .version(packageJson.version)
    .description(packageJson.description)
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

      process.stdout.write(String(entryRef()));
    });
}

export function cli(args: string[]) {
  try {
    const program = buildProgram();

    const hasArgs = args.length > 2;
    if (!hasArgs) {
      program.help();
    } else {
      program.parse(args);
    }

    process.exit(0);
  } catch (error) {
    process.stderr.write(String(error));
    process.exit(1);
  }
}
