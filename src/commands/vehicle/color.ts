import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('color')
  .description(`Generates a vehicle color.`)
  .action(() => {
    console.log(faker.vehicle.color());
  });

export default command;
