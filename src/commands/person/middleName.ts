import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('middleName')
  .description(`Returns a random middle name.`)
  .action(() => {
    console.log(faker['person']['middleName']());
  });

export default command;
