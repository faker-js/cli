import { Faker, faker } from '@faker-js/faker';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { describe, expect, it } from 'vitest';

const execPromise = promisify(exec);

function isDeprecated(module: string, entry: string): boolean {
  const DEPRECATED_METHODS: {
    [x: string]: ReadonlyArray<string>;
  } = {
    company: [
      'bs',
      'bsAdjective',
      'bsBuzz',
      'bsNoun',
      'companySuffix',
      'suffixes',
    ],
    finance: ['account', 'mask'],
    helpers: ['*'],
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
    git: ['shortSha'],
    random: ['*'],
  } satisfies {
    [moduleKey in keyof Faker]?: ReadonlyArray<keyof Faker[moduleKey] | '*'>;
  };

  const moduleRef = DEPRECATED_METHODS[module] ?? [];
  return moduleRef.includes('*') || moduleRef.includes(entry);
}

function getModuleEntries(faker: Faker): [string, object][] {
  return Object.entries(faker).filter(
    (entry): entry is [string, object] => typeof entry[1] === 'object',
  );
}

function getEntryKeys(moduleKey: string, moduleRef: object): string[] {
  return Object.entries(moduleRef)
    .filter(([entryKey]) => !isDeprecated(moduleKey, entryKey))
    .filter(([, entry]) => typeof entry === 'function')
    .map(([entryKey]) => entryKey);
}

describe('CLI', () => {
  describe('Argument', () => {
    for (const [moduleKey, moduleRef] of getModuleEntries(faker)) {
      for (const entryKey of getEntryKeys(moduleKey, moduleRef)) {
        describe(entryKey, () => {
          it('should work', async () => {
            const command = `faker ${entryKey}`;
            const { stderr, stdout } = await execPromise(command);

            expect(stderr).toBeFalsy();
            expect(stdout).toBeTruthy();
          });
        });
      }
    }
  });
});
