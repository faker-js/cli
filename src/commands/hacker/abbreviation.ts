import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('abbreviation')
  .description(`Returns a random hacker/IT abbreviation.`)
  .action(() => {
    console.log(faker['hacker']['abbreviation']());
  });

export default command;
