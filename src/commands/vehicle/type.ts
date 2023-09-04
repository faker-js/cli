import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('type')
  .description(`Returns a vehicle type.`)
  .action(() => {
    console.log(faker.vehicle.type());
  });

export default command;
