import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('catchPhraseNoun')
  .description(
    `Returns a random catch phrase noun that can be displayed to an end user..`,
  )
  .action(() => {
    console.log(faker.company.catchPhraseNoun());
  });

export default command;
