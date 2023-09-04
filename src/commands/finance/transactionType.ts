import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('transactionType')
  .description(`Returns a random transaction type.`)
  .action(() => {
    console.log(faker.finance.transactionType());
  });

export default command;
