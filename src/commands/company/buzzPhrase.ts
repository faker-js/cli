import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('buzzPhrase')
  .description(
    `Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(() => {
    console.log(faker['company']['buzzPhrase']());
  });

export default command;
