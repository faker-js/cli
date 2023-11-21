import { Command } from 'commander';

const command = new Command('bicycle')
  .description(`Returns a type of bicycle.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.bicycle());
  });

export default command;
