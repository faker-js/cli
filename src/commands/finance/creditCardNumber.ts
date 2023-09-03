import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('creditCardNumber')
  .description(`Generates a random credit card number.`)
  .action(() => {
    console.log(faker['finance']['creditCardNumber']());
  });

export default command;
