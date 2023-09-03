import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('country')
  .description(`Returns a random country name.`)
  .action(() => {
    console.log(faker['location']['country']());
  });

export default command;
