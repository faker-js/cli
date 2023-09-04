import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fileName')
  .description(`Generates a random file name with extension.`)
  .action(() => {
    console.log(faker.system.fileName());
  });

export default command;
