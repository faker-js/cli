import { Command } from 'commander';

const command = new Command('airport')
  .description(`Generates a random airport.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.airline.airport());
  });

export default command;
