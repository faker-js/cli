import { Command } from 'commander';

const command = new Command('cardinalDirection')
  .description(
    `Returns a random cardinal direction (north, east, south, west).`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.cardinalDirection());
  });

export default command;
