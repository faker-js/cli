import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cardinalDirection')
  .description(
    `Returns a random cardinal direction (north, east, south, west).`,
  )
  .action(() => {
    console.log(faker.location.cardinalDirection());
  });

export default command;
