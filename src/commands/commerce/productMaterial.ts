import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('productMaterial')
  .description(`Generates a material of a product.`)
  .action(() => {
    console.log(faker.commerce.productMaterial());
  });

export default command;
