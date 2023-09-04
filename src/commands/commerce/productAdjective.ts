import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('productAdjective')
  .description(`Generates an adjective describing a product.`)
  .action(() => {
    console.log(faker.commerce.productAdjective());
  });

export default command;
