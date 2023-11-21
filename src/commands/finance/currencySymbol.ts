import { Command } from 'commander';

const command = new Command('currencySymbol')
  .description(`Returns a random currency symbol.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.currencySymbol());
  });

export default command;
