import { Command } from 'commander';

const command = new Command('productAdjective')
  .description(`Returns an adjective describing a product.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.productAdjective());
  });

export default command;
