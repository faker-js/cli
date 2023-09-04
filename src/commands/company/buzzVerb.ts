import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('buzzVerb')
  .description(
    `Generates a random buzz verb that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(() => {
    console.log(faker.company.buzzVerb());
  });

export default command;
