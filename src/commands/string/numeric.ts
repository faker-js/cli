import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('numeric')
  .description(`Generates a given length string of digits.`)
  .action(() => {
    console.log(faker.string.numeric());
  });

export default command;
