import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('number')
  .description(`Generates a random phone number.`)
  .action(() => {
    console.log(faker['phone']['number']());
  });

export default command;
