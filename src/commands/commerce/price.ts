import { Command } from 'commander';

const command = new Command('price')
  .description(`Generates a price between min and max (inclusive).`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.price());
  });

export default command;
