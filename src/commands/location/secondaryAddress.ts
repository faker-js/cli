import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('secondaryAddress')
  .description(
    `Generates a random localized secondary address. This refers to a specific location at a given address`,
  )
  .action(() => {
    console.log(faker.location.secondaryAddress());
  });

export default command;
