import { Command } from 'commander';

const command = new Command('catchPhraseNoun')
  .description(
    `Returns a random catch phrase noun that can be displayed to an end user..`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.catchPhraseNoun());
  });

export default command;
