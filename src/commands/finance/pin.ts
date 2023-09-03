import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('pin')
  .description(`Generates a random PIN number.`)
  .action(() => {
    console.log(faker['finance']['pin']());
  });

export default command;
