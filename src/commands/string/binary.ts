import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('binary')
  .description(`Generates a binary string.`)
  .action(() => {
    console.log(faker.string.binary());
  });

export default command;
