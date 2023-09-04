import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('alphanumeric')
  .description(`Generating a string consisting of alpha characters and digits.`)
  .action(() => {
    console.log(faker.string.alphanumeric());
  });

export default command;
