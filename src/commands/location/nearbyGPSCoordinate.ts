import { Command } from 'commander';

const command = new Command('nearbyGPSCoordinate')
  .description(
    `Generates a random GPS coordinate within the specified radius from the given coordinate.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.nearbyGPSCoordinate());
  });

export default command;
