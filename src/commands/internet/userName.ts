import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('userName')
  .description(`Generates a username using the given person's name as base.`)
  .action(() => {
    console.log(faker['internet']['userName']());
  });

export default command;
