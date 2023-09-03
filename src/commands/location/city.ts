import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('city')
  .description(`Generates a random localized city name.`)
  .action(() => {
    console.log(faker['location']['city']());
  });

export default command;
