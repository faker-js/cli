import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('noun')
  .description(`Returns a noun of random or optionally specified length.`)
  .action(() => {
    console.log(faker['word']['noun']());
  });

export default command;
