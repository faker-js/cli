import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cityName')
  .description(
    `Generates a random city name from a list of real cities for the locale.`,
  )
  .action(() => {
    console.log(faker.location.cityName());
  });

export default command;
