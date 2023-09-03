import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('type')
  .description(`Returns a random animal type.`)
  .action(() => {
    console.log(faker['animal']['type']());
  });

export default command;