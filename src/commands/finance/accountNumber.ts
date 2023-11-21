import { Command } from 'commander';

const command = new Command('accountNumber')
  .description(`Generates a random account number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.accountNumber());
  });

export default command;
