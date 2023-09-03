import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lastName')
  .description(`Returns a random last name.`)
  .action(() => {
    console.log(faker['person']['lastName']());
  });

export default command;
