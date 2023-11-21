import { Command } from 'commander';

const command = new Command('longitude')
  .description(`Generates a random longitude.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.longitude());
  });

export default command;
