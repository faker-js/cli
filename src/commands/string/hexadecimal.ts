import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('hexadecimal')
  .description(`Generates a hexadecimal string.`)
  .action(() => {
    console.log(faker.string.hexadecimal());
  });

export default command;
