import { Command } from 'commander';

const command = new Command('airplane')
  .description(`Generates a random airplane.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.airline.airplane());
  });

export default command;
