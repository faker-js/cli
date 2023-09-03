import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('nature')
  .description(`Generates a random nature image url.`)
  .action(() => {
    console.log(faker['image']['nature']());
  });

export default command;
