import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('past')
  .description(`Generates a random date in the past.`)
  .action(() => {
    console.log(faker['date']['past']());
  });

export default command;
