import { Command } from 'commander';

const command = new Command('product')
  .description(`Returns a short product name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.product());
  });

export default command;
