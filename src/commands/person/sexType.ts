import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sexType')
  .description(`Returns a random sex type.`)
  .action(() => {
    console.log(faker['person']['sexType']());
  });

export default command;
