import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('recordLocator')
  .description(`Generates a random record locator.`)
  .action(() => {
    console.log(faker.airline.recordLocator());
  });

export default command;
