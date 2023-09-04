import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('alpha')
  .description(
    `Generating a string consisting of letters in the English alphabet.`,
  )
  .action(() => {
    console.log(faker.string.alpha());
  });

export default command;
