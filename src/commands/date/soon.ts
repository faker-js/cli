import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('soon')
  .description(`Generates a random date in the near future.`)
  .action(() => {
    console.log(faker['date']['soon']());
  });

export default command;
