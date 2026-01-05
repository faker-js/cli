import { Argument, Command, Option } from 'commander';
import packageJson from '../package.json' with { type: 'json' };
import { API } from './api.js';
import { FunctionReferenceError } from './errors.js';

const ALL_ENTRYPOINTS: Record<string, () => unknown> = Object.values(
  API,
).reduce((result, moduleRef) => ({ ...moduleRef, ...result }), {});

const moduleOption = new Option(
  '-m, --module <moduleName>',
  'The name of the module to use for the function invokation. You might want to explicitly set this option if the name of function you want to invoke exists in multiple modules. By default the alphanumerical first module will be choosen otherwise.',
).choices(Object.keys(API));

const entryArgument = new Argument(
  '<functionName>',
  'The name of the function to invoke.',
).choices(Object.keys(ALL_ENTRYPOINTS));

function actionHandler(this: Command) {
  // asserting the type here is fine, because Commander already verifies the user input via the required markers on the argument
  const [functionName] = this.args as [string];
  // asserting the type here is fine, because Commander already verifies the user input via .choices()
  const moduleName = this.getOptionValue('module') as
    | keyof typeof API
    | undefined;

  let entrypointRef = ALL_ENTRYPOINTS;
  if (moduleName !== undefined) {
    entrypointRef = API[moduleName];
  }

  const entryRef = entrypointRef[functionName];
  // This can only happen if a module was picked.
  // Otherwise Commander verifies the user input via .choices()
  if (entryRef === undefined) {
    throw new FunctionReferenceError(functionName, moduleName);
  }

  const output = String(entryRef());
  process.stdout.write(output + (process.stdout.isTTY ? '\n' : ''));
}

export function buildProgram(): Command {
  return new Command()
    .name('faker')
    .version(packageJson.version)
    .description(packageJson.description)
    .addOption(moduleOption)
    .addArgument(entryArgument)
    .action(actionHandler);
}
