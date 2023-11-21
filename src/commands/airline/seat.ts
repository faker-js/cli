import { Command } from 'commander';

const command = new Command('seat')
  .description(`Generates a random seat.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.airline.seat());
  });

export default command;
