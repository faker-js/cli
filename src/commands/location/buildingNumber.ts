import { Command } from 'commander';

const command = new Command('buildingNumber')
  .description(`Generates a random building number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.buildingNumber());
  });

export default command;
