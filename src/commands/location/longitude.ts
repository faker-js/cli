import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('longitude')
  .description(`Generates a random longitude.`)
  .action(() => {
    console.log(faker['location']['longitude']());
  });

export default command;
