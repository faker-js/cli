import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('transactionDescription')
  .description(`Generates a random transaction description.`)
  .action(() => {
    console.log(faker['finance']['transactionDescription']());
  });

export default command;
