import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('uuid')
  .description(`Generates a UUID v4 (Universally Unique Identifier).`)
  .action(() => {
    console.log(faker.string.uuid());
  });

export default command;
