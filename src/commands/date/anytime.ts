import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('anytime')
  .description(
    `Generates a random date that can be either in the past or in the future.`,
  )
  .action(() => {
    console.log(faker['date']['anytime']());
  });

export default command;
