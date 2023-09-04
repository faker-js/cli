import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('float')
  .description(
    `Generates a single random floating-point number between zero and one.`,
  )
  .action(() => {
    console.log(faker.number.float());
  });

export default command;
