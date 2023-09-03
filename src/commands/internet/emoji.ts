import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('emoji')
  .description(`Generates a random emoji.`)
  .action(() => {
    console.log(faker['internet']['emoji']());
  });

export default command;
