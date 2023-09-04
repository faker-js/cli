import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bicycle')
  .description(`Returns a type of bicycle.`)
  .action(() => {
    console.log(faker.vehicle.bicycle());
  });

export default command;
