import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('seat')
  .description(`Generates a random seat.`)
  .action(() => {
    console.log(faker['airline']['seat']());
  });

export default command;
