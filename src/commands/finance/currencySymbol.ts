import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('currencySymbol')
  .description(`Returns a random currency symbol.`)
  .action(() => {
    console.log(faker['finance']['currencySymbol']());
  });

export default command;
