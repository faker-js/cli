import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('displayName')
  .description(
    `Generates a display name using the given person's name as base.`,
  )
  .action(() => {
    console.log(faker.internet.displayName());
  });

export default command;
