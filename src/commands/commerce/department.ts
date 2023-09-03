import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('department')
  .description(`Returns a department inside a shop.`)
  .action(() => {
    console.log(faker['commerce']['department']());
  });

export default command;
