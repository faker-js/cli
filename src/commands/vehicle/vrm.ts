import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('vrm')
  .description(
    `Generates a vehicle registration number (Vehicle Registration Mark - VRM).`,
  )
  .action(() => {
    console.log(faker.vehicle.vrm());
  });

export default command;
