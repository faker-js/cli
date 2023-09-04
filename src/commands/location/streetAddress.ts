import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('streetAddress')
  .description(`Generates a random localized street address.`)
  .action(() => {
    console.log(faker.location.streetAddress());
  });

export default command;
