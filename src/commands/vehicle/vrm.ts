import { Command } from 'commander';

const command = new Command('vrm')
  .description(
    `Returns a vehicle registration number (Vehicle Registration Mark - VRM)`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.vehicle.vrm());
  });

export default command;
