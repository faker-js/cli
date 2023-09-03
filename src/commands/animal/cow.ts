import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cow')
  .description(`Returns a random cow species.`)
  .action(() => {
    console.log(faker['animal']['cow']());
  });

export default command;