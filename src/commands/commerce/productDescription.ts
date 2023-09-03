import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('productDescription')
  .description(`Returns a product description.`)
  .action(() => {
    console.log(faker['commerce']['productDescription']());
  });

export default command;