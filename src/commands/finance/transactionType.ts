import { Command } from 'commander';

const command = new Command('transactionType')
  .description(`Returns a random transaction type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.transactionType());
  });

export default command;
