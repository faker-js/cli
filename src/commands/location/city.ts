import { Command } from 'commander';

const command = new Command('city')
  .description(`Generates a random localized city name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.city());
  });

export default command;
