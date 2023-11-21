import { Command } from 'commander';

const command = new Command('productMaterial')
  .description(`Returns a material of a product.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.productMaterial());
  });

export default command;
