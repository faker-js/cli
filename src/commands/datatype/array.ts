import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('array')
  .description(`Generates an array with random strings and numbers.`)
  .action(() => {
    console.log(faker.datatype.array());
  });

export default command;
