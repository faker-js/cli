import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('productName')
  .description(`Generates a random descriptive product name.`)
  .action(() => {
    console.log(faker.commerce.productName());
  });

export default command;
