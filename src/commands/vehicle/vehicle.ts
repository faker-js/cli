import { Command } from 'commander';

const command = new Command('vehicle')
  .description(`Returns a random vehicle.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.vehicle());
  });

export default command;
