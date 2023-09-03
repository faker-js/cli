import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('number')
  .description(
    `Returns a single random number between zero and the given max value or the given range with the specified precision.`,
  )
  .action(() => {
    console.log(faker['datatype']['number']());
  });

export default command;
