import { Command } from 'commander';

const command = new Command('ordinalDirection')
  .description(
    `Returns a random ordinal direction (northwest, southeast, etc).`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.ordinalDirection());
  });

export default command;
