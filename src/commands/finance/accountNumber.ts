import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('accountNumber')
  .description(`Generates a random account number.`)
  .action(() => {
    console.log(faker.finance.accountNumber());
  });

export default command;
