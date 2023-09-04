import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('product')
  .description(`Returns a short product name.`)
  .action(() => {
    console.log(faker.commerce.product());
  });

export default command;
