import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('airport')
  .description(`Generates a random airport.`)
  .action(() => {
    console.log(faker.airline.airport());
  });

export default command;
