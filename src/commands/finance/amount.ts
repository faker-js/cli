import { Command } from 'commander';

const command = new Command('amount')
  .description(
    `Generates a random amount between the given bounds (inclusive).`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.amount());
  });

export default command;
