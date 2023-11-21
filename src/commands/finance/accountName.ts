import { Command } from 'commander';

const command = new Command('accountName')
  .description(`Generates a random account name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.accountName());
  });

export default command;
