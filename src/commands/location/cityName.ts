import { Command } from 'commander';

const command = new Command('cityName')
  .description(
    `Returns a random city name from a list of real cities for the locale.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.cityName());
  });

export default command;
