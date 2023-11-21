import { Command } from 'commander';

const command = new Command('vin')
  .description(`Returns a vehicle identification number (VIN).`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.vin());
  });

export default command;
