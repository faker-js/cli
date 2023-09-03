import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('avatar')
  .description(`Generates a random avatar image url.`)
  .action(() => {
    console.log(faker['image']['avatar']());
  });

export default command;
