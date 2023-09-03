import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('people')
  .description(`Generates a random people image url.`)
  .action(() => {
    console.log(faker['image']['people']());
  });

export default command;
