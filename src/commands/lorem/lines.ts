import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lines')
  .description(
    `Generates the given number lines of lorem separated by \`'\n'\`.`,
  )
  .action(() => {
    console.log(faker.lorem.lines());
  });

export default command;
