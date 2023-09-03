import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fish')
  .description(`Returns a random fish species.`)
  .action(() => {
    console.log(faker['animal']['fish']());
  });

export default command;
