import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('future')
  .description(`Generates a random date in the future.`)
  .action(() => {
    console.log(faker['date']['future']());
  });

export default command;
