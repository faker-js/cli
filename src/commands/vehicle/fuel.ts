import { Command } from 'commander';

const command = new Command('fuel')
  .description(`Returns a fuel type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.fuel());
  });

export default command;
