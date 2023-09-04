import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('symbol')
  .description(
    `Returns a string containing only special characters from the following list:`,
  )
  .action(() => {
    console.log(faker.string.symbol());
  });

export default command;
