import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('catchPhrase')
  .description(
    `Generates a random catch phrase that can be displayed to an end user.`,
  )
  .action(() => {
    console.log(faker['company']['catchPhrase']());
  });

export default command;
