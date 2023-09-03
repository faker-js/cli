import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('dataUri')
  .description(`Generates a random data uri containing an svg image.`)
  .action(() => {
    console.log(faker['image']['dataUri']());
  });

export default command;
