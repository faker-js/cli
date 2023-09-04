import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('price')
  .description(`Generates a price between min and max (inclusive).`)
  .action(() => {
    console.log(faker.commerce.price());
  });

export default command;
