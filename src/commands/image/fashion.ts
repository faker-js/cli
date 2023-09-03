import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fashion')
  .description(`Generates a random fashion image url.`)
  .action(() => {
    console.log(faker['image']['fashion']());
  });

export default command;
