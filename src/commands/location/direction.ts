import { Command } from 'commander';

const command = new Command('direction')
  .description(
    `Returns a random direction (cardinal and ordinal; northwest, east, etc).`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.direction());
  });

export default command;
