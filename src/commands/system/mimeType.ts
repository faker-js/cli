import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('mimeType')
  .description(`Generates a mime-type.`)
  .action(() => {
    console.log(faker.system.mimeType());
  });

export default command;
