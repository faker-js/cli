import { Command } from 'commander';
import { description, version } from '../package.json';

function isObject(value: unknown): value is object {
  return typeof value === 'object';
}

function isFunction(value: unknown): value is () => unknown {
  return typeof value === 'function';
}

async function getFunctionByName(functionName: string): Promise<() => unknown> {
  const { faker } = await import('@faker-js/faker/locale/en');
  for (const module of Object.values(faker)) {
    if (!isObject(module)) {
      continue;
    }

    for (const entry of Object.values(module)) {
      if (!isFunction(entry)) {
        continue;
      }

      // we need to use "includes" since the function names are "bound functionName"
      if (!entry.name.includes(functionName)) {
        continue;
      }

      return entry;
    }
  }

  throw new Error(
    `You tried to generate a value with the function name "${functionName}", but this name does not exist in Faker. Please checkout their documentation (https://fakerjs.dev) to look for available functions.`,
  );
}

export function cli(args: string[]) {
  const program = new Command()
    .name('faker')
    .version(version)
    .description(description)
    .argument(
      '<functionName>',
      'The function name that Faker uses to generate a value.',
    )
    .action(async (functionName) => {
      if (typeof functionName !== 'string') {
        throw new Error(
          `Invalid "functionName" argument. A string value is required but found ${functionName}.`,
        );
      }

      const fn = await getFunctionByName(functionName);
      console.log(fn());
    });

  program.parse(args);

  const hasArgs = args.length > 2;
  if (!hasArgs) {
    program.help();
  }
}
