import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sentences')
  .description(`Generates the given number of sentences.`)
  .action(() => {
    console.log(faker['lorem']['sentences']());
  });

export default command;
