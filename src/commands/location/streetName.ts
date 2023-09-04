import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('streetName')
  .description(`Generates a random localized street name.`)
  .action(() => {
    console.log(faker.location.streetName());
  });

export default command;
