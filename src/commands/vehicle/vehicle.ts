import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('vehicle')
  .description(`Generates a random vehicle.`)
  .action(() => {
    console.log(faker.vehicle.vehicle());
  });

export default command;
