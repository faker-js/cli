import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('port')
  .description(`Generates a random port number.`)
  .action(() => {
    console.log(faker['internet']['port']());
  });

export default command;
