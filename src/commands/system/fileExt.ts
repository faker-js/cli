import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fileExt')
  .description(`Generates a file extension.`)
  .action(() => {
    console.log(faker.system.fileExt());
  });

export default command;
