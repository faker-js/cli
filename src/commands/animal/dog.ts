import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('dog')
  .description(`Returns a random dog breed.`)
  .action(() => {
    console.log(faker['animal']['dog']());
  });

export default command;
