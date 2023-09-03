import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('food')
  .description(`Generates a random food image url.`)
  .action(() => {
    console.log(faker['image']['food']());
  });

export default command;
