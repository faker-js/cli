import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('maskedNumber')
  .description(`Generates a random masked number.`)
  .action(() => {
    console.log(faker['finance']['maskedNumber']());
  });

export default command;
