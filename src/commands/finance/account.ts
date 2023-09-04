import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('account')
  .description(`Generates a random account number.`)
  .action(() => {
    console.log(faker.finance.account());
  });

export default command;
