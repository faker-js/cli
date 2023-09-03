import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('adverb')
  .description(`Returns an adverb of random or optionally specified length.`)
  .action(() => {
    console.log(faker['word']['adverb']());
  });

export default command;
