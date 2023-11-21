import { Command } from 'commander';

const command = new Command('transactionDescription')
  .description(`Generates a random transaction description.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.transactionDescription());
  });

export default command;
