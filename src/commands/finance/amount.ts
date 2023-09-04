import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('amount')
  .description(
    `Generates a random amount between the given bounds (inclusive).`,
  )
  .action(() => {
    console.log(faker.finance.amount());
  });

export default command;
