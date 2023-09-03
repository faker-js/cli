import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('jobArea')
  .description(`Generates a random job area.`)
  .action(() => {
    console.log(faker['person']['jobArea']());
  });

export default command;
