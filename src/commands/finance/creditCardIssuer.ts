import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('creditCardIssuer')
  .description(`Returns a random credit card issuer.`)
  .action(() => {
    console.log(faker['finance']['creditCardIssuer']());
  });

export default command;