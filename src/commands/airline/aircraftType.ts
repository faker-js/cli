import { Command } from 'commander';

const command = new Command('aircraftType')
  .description(`Returns a random aircraft type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.airline.aircraftType());
  });

export default command;
