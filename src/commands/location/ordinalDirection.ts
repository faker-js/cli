import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('ordinalDirection')
  .description(
    `Generates a random ordinal direction (northwest, southeast, etc).`,
  )
  .action(() => {
    console.log(faker.location.ordinalDirection());
  });

export default command;
