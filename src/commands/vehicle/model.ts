import { Command } from 'commander';

const command = new Command('model')
  .description(`Returns a vehicle model.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.model());
  });

export default command;
