import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('type')
  .description(`Generates a vehicle type.`)
  .action(() => {
    console.log(faker.vehicle.type());
  });

export default command;
