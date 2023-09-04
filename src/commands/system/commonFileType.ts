import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commonFileType')
  .description(`Generates a commonly used file type.`)
  .action(() => {
    console.log(faker.system.commonFileType());
  });

export default command;
