import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('mask')
  .description(`Generates a random masked number.`)
  .action(() => {
    console.log(faker['finance']['mask']());
  });

export default command;