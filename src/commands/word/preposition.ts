import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('preposition')
  .description(
    `Returns a preposition of random or optionally specified length.`,
  )
  .action(() => {
    console.log(faker.word.preposition());
  });

export default command;
