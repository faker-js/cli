import { Command } from 'commander';

const command = new Command('manufacturer')
  .description(`Returns a manufacturer name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.manufacturer());
  });

export default command;
