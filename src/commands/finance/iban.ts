import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('iban')
  .description(`Generates a random iban.`)
  .action(() => {
    console.log(faker['finance']['iban']());
  });

export default command;
