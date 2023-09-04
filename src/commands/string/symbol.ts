import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('symbol')
  .description(`Generates a string containing only special characters.`)
  .action(() => {
    console.log(faker.string.symbol());
  });

export default command;
