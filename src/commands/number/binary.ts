import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('binary')
  .description(`Generates a binary number.`)
  .action(() => {
    console.log(faker.number.binary());
  });

export default command;
