import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('transport')
  .description(`Generates a random transport image url.`)
  .action(() => {
    console.log(faker['image']['transport']());
  });

export default command;
