import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commitDate')
  .description(
    `Generates a date string for a git commit using the same format as \`git log\`.`,
  )
  .action(() => {
    console.log(faker['git']['commitDate']());
  });

export default command;
