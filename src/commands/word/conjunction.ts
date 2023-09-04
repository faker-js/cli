import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('conjunction')
  .description(
    `Returns a conjunction of random or optionally specified length.`,
  )
  .action(() => {
    console.log(faker.word.conjunction());
  });

export default command;
