import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('datetime')
  .description(
    `Returns a Date object using a random number of milliseconds since`,
  )
  .action(() => {
    console.log(faker['datatype']['datetime']());
  });

export default command;
