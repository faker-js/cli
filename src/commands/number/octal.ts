import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('octal')
  .description(`Generates an octal number.`)
  .action(() => {
    console.log(faker.number.octal());
  });

export default command;
