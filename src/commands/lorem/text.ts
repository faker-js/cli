import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('text')
  .description(`Generates a random text based on a random lorem method.`)
  .action(() => {
    console.log(faker['lorem']['text']());
  });

export default command;
