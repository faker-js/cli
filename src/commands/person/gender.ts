import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('gender')
  .description(`Returns a random gender.`)
  .action(() => {
    console.log(faker['person']['gender']());
  });

export default command;
