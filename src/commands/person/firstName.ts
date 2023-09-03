import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('firstName')
  .description(`Returns a random first name.`)
  .action(() => {
    console.log(faker['person']['firstName']());
  });

export default command;
