import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('suffixes')
  .description(`Returns an array with possible company name suffixes.`)
  .action(() => {
    console.log(faker['company']['suffixes']());
  });

export default command;
