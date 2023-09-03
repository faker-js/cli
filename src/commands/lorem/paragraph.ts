import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('paragraph')
  .description(`Generates a paragraph with the given number of sentences.`)
  .action(() => {
    console.log(faker['lorem']['paragraph']());
  });

export default command;
