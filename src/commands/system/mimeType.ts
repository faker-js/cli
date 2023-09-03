import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('mimeType')
  .description(`Returns a mime-type.`)
  .action(() => {
    console.log(faker['system']['mimeType']());
  });

export default command;
