import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('flightNumber')
  .description(`Generates a random flight number.`)
  .action(() => {
    console.log(faker.airline.flightNumber());
  });

export default command;
