import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('aircraftType')
  .description(`Generates a random aircraft type.`)
  .action(() => {
    console.log(faker.airline.aircraftType());
  });

export default command;
