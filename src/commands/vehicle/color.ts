import { Command } from 'commander';

const command = new Command('color')
  .description(`Returns a vehicle color.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.color());
  });

export default command;
