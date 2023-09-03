import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fileType')
  .description(`Returns a file type.`)
  .action(() => {
    console.log(faker['system']['fileType']());
  });

export default command;
