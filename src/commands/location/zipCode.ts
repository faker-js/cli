import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('zipCode')
  .description(`Generates random zip code from specified format.`)
  .action(() => {
    console.log(faker.location.zipCode());
  });

export default command;
