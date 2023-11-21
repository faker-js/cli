import { Command } from 'commander';

const command = new Command('latitude')
  .description(`Generates a random latitude.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.latitude());
  });

export default command;
