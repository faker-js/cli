import { Command } from 'commander';

const command = new Command('account')
  .description(`Generates a random account number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.account());
  });

export default command;
