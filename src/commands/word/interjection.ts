import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('interjection')
  .description(
    `Returns an interjection of random or optionally specified length.`,
  )
  .action(() => {
    console.log(faker['word']['interjection']());
  });

export default command;
