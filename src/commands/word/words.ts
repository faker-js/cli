import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('words')
  .description(
    `Generates a string containing a number of space separated random words.`,
  )
  .action(() => {
    console.log(faker.word.words());
  });

export default command;
