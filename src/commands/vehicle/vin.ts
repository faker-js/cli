import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('vin')
  .description(`Returns a vehicle identification number (VIN).`)
  .action(() => {
    console.log(faker['vehicle']['vin']());
  });

export default command;
