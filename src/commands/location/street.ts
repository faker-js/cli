import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('street')
  .description(`Generates a random localized street name.`)
  .action(() => {
    console.log(faker.location.street());
  });

export default command;
