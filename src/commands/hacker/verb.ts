import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('verb')
  .description(`Returns a random hacker/IT verb.`)
  .action(() => {
    console.log(faker['hacker']['verb']());
  });

export default command;
