import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('filePath')
  .description(`Returns a file path.`)
  .action(() => {
    console.log(faker.system.filePath());
  });

export default command;
