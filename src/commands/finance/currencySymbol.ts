import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('currencySymbol')
  .description(`Generates a random currency symbol.`)
  .action(() => {
    console.log(faker.finance.currencySymbol());
  });

export default command;
