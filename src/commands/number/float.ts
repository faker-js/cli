import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('float')
  .description(
    `Returns a single random floating-point number for a given precision or range and precision.`,
  )
  .action(() => {
    console.log(faker['number']['float']());
  });

export default command;
