import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fuel')
  .description(`Returns a fuel type.`)
  .action(() => {
    console.log(faker.vehicle.fuel());
  });

export default command;
