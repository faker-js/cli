import { Command } from 'commander';

const command = new Command('currencyName')
  .description(`Returns a random currency name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.currencyName());
  });

export default command;
