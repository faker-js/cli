import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('secondaryAddress')
  .description(`Generates a random localized secondary address.`)
  .action(() => {
    console.log(faker.location.secondaryAddress());
  });

export default command;
