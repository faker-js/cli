import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('float')
  .description(
    `Returns a single random floating-point number for the given precision or range and precision.`,
  )
  .action(() => {
    console.log(faker.datatype.float());
  });

export default command;
