import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('octal')
  .description(`Generates an octal string.`)
  .action(() => {
    console.log(faker.string.octal());
  });

export default command;
