import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cetacean')
  .description(`Returns a random cetacean species.`)
  .action(() => {
    console.log(faker['animal']['cetacean']());
  });

export default command;
