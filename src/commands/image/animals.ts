import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('animals')
  .description(`Generates a random animal image url.`)
  .action(() => {
    console.log(faker['image']['animals']());
  });

export default command;
