import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('currencyCode')
  .description(`Returns a random currency code.`)
  .action(() => {
    console.log(faker['finance']['currencyCode']());
  });

export default command;
