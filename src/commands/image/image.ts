import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('image')
  .description(
    `Generates a random image url from one of the supported categories.`,
  )
  .action(() => {
    console.log(faker['image']['image']());
  });

export default command;
