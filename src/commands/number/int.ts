import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('int')
  .description(
    `Returns a single random integer between zero and the given max value or the given range.`,
  )
  .action(() => {
    console.log(faker['number']['int']());
  });

export default command;
