import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('flightNumber')
  .description(
    `Returns a random flight number. Flight numbers are always 1 to 4 digits long. Sometimes they are`,
  )
  .action(() => {
    console.log(faker.airline.flightNumber());
  });

export default command;
