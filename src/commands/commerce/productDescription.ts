import { Command } from 'commander';

const command = new Command('productDescription')
  .description(`Returns a product description.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.productDescription());
  });

export default command;
