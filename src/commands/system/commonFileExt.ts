import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commonFileExt')
  .description(`Generates a commonly used file extension.`)
  .action(() => {
    console.log(faker.system.commonFileExt());
  });

export default command;
