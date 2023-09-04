import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('exampleEmail')
  .description(
    `Generates an email address using an example mail provider using the given person's name as base.`,
  )
  .action(() => {
    console.log(faker.internet.exampleEmail());
  });

export default command;
