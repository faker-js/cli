import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('imageUrl')
  .description(`Generates a random image url.`)
  .action(() => {
    console.log(faker['image']['imageUrl']());
  });

export default command;
