import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('jobDescriptor')
  .description(`Generates a random job descriptor.`)
  .action(() => {
    console.log(faker['person']['jobDescriptor']());
  });

export default command;
