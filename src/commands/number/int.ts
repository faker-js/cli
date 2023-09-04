import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('int')
  .description(
    `Generates a single random integer between zero and \`Number.MAX_SAFE_INTEGER\`.`,
  )
  .action(() => {
    console.log(faker.number.int());
  });

export default command;
