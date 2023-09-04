import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('nearbyGPSCoordinate')
  .description(
    `Generates a random GPS coordinate within the specified radius from the given coordinate.`,
  )
  .action(() => {
    console.log(faker.location.nearbyGPSCoordinate());
  });

export default command;
