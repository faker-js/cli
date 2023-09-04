import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('manufacturer')
  .description(`Returns a manufacturer name.`)
  .action(() => {
    console.log(faker.vehicle.manufacturer());
  });

export default command;
