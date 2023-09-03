import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('currencyName')
  .description(`Returns a random currency name.`)
  .action(() => {
    console.log(faker['finance']['currencyName']());
  });

export default command;
