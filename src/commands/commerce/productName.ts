import { Command } from 'commander';

const command = new Command('productName')
  .description(`Generates a random descriptive product name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.productName());
  });

export default command;
