import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fileType')
  .description(`Generates a file type.`)
  .action(() => {
    console.log(faker.system.fileType());
  });

export default command;
