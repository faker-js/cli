import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('recordLocator')
  .description(
    `Generates a random [record locator](https://en.wikipedia.org/wiki/Record_locator). Record locators`,
  )
  .action(() => {
    console.log(faker['airline']['recordLocator']());
  });

export default command;
