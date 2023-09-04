import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('country')
  .description(`Generates a random country name.`)
  .action(() => {
    console.log(faker.location.country());
  });

export default command;
