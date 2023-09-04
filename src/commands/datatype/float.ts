import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('float')
  .description(
    `Generates a single random floating-point number between zero and 99999.`,
  )
  .action(() => {
    console.log(faker.datatype.float({}));
  });

export default command;
