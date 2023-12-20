import { Faker, faker } from '@faker-js/faker';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { describe, expect, it } from 'vitest';

type FakerMap = {
  [moduleKey in keyof Faker]?: ReadonlyArray<keyof Faker[moduleKey] | '*'>;
};

type LiteralUnion<TSuggested extends string> =
  | TSuggested
  | (string & { zz_IGNORE_ME?: never });

const execPromise = promisify(exec);

const DEPRECATED_MAP: {
  [module: string]: ReadonlyArray<string>;
} = {
  company: [
    'bs',
    'bsAdjective',
    'bsBuzz',
    'bsNoun',
    'companySuffix',
    'suffixes',
  ],
  datatype: [
    'array',
    'bigInt',
    'datetime',
    'float',
    'hexadecimal',
    'json',
    'number',
    'string',
    'uuid',
  ],
  finance: ['account', 'mask'],
  git: ['shortSha'],
  image: [
    'abstract',
    'animals',
    'business',
    'cats',
    'city',
    'fashion',
    'food',
    'image',
    'imageUrl',
    'nature',
    'nightlife',
    'people',
    'sports',
    'technics',
    'transport',
  ],
  location: ['stateAbbr', 'streetName', 'cityName', 'zipCodeByState'],
  random: ['*'],
} satisfies FakerMap;

const REQUIRE_PARAMS_MAP: {
  [module: string]: ReadonlyArray<string>;
} = {
  date: ['between', 'betweens'],
  helpers: ['*'],
  string: ['fromCharacters'],
} satisfies FakerMap;

/**
 * Checks whether a Faker module is valid.
 * Invalid modules are for example private properties.
 */
function isValidModule(moduleKey: string): boolean {
  const IGNORE_MODULES: LiteralUnion<keyof Faker>[] = [
    '_randomizer',
    'definitions',
    'rawDefinitions',
  ];

  return !(
    IGNORE_MODULES.includes(moduleKey) ||
    DEPRECATED_MAP[moduleKey]?.includes('*') ||
    REQUIRE_PARAMS_MAP[moduleKey]?.includes('*')
  );
}

/**
 * Checks whether a Faker method was removed, but still exists on the module.
 * These methods usually exist for JS backwards-compatibility.
 */
function isRemoved(moduleKey: string, entryKey: string): boolean {
  const REMOVED_METHODS: {
    [module: string]: ReadonlyArray<string>;
  } = {
    random: ['locale'],
  };

  const moduleRef = REMOVED_METHODS[moduleKey] ?? [];
  return moduleRef.includes(entryKey);
}

/**
 * Checks whether a Faker method requires parameters when executed.
 */
function requiresParameter(moduleKey: string, entryKey: string): boolean {
  const moduleRef = REQUIRE_PARAMS_MAP[moduleKey] ?? [];
  return moduleRef.includes('*') || moduleRef.includes(entryKey);
}

/**
 * Checks whether a Faker method is deprecated.
 */
function isDeprecated(moduleKey: string, entryKey: string): boolean {
  const moduleRef = DEPRECATED_MAP[moduleKey] ?? [];
  return moduleRef.includes('*') || moduleRef.includes(entryKey);
}

function getModuleEntries(faker: Faker): [string, object][] {
  return Object.entries(faker)
    .filter((entry): entry is [string, object] => typeof entry[1] === 'object')
    .filter(([moduleKey]) => isValidModule(moduleKey));
}

function getEntryKeys(moduleKey: string, moduleRef: object): string[] {
  return Object.entries(moduleRef)
    .filter(([, entry]) => typeof entry === 'function')
    .filter(([entryKey]) => !isRemoved(moduleKey, entryKey))
    .filter(([entryKey]) => !requiresParameter(moduleKey, entryKey))
    .map(([entryKey]) => entryKey);
}

describe('CLI', () => {
  describe('Argument', () => {
    describe.each(getModuleEntries(faker))('%s', (moduleKey, moduleRef) => {
      describe.each(getEntryKeys(moduleKey, moduleRef))('%s', (entryKey) => {
        async function executeCommand(): Promise<{
          stdout: string;
          stderr: string;
        }> {
          const command = `faker ${moduleKey} ${entryKey}`;
          return execPromise(command);
        }

        if (isDeprecated(moduleKey, entryKey)) {
          it('should log a deprecation warning', async () => {
            const { stderr } = await executeCommand();

            expect(stderr).toContain('[@faker-js/faker]');
            expect(stderr).toContain(`faker.${moduleKey}.${entryKey}`);
            expect(stderr).toContain('is deprecated');
          });
        } else {
          it('should work', async () => {
            const { stderr, stdout } = await executeCommand();

            expect(stderr).toBeFalsy();
            expect(stdout).toBeTruthy();
          });
        }
      });
    });
  });
});
