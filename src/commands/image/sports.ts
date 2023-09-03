import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sports')
  .description(`Generates a random sports image url.`)
  .action(() => {
    console.log(faker['image']['sports']());
  });

export default command;
