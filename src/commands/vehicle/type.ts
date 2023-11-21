import { Command } from 'commander';

const command = new Command('type')
  .description(`Returns a vehicle type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.type());
  });

export default command;
