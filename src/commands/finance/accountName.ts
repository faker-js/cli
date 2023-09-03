import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('accountName')
  .description(`Generates a random account name.`)
  .action(() => {
    console.log(faker['finance']['accountName']());
  });

export default command;
