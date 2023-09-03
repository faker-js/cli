import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('uuid')
  .description(
    `Returns a UUID v4 ([Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)).`,
  )
  .action(() => {
    console.log(faker['datatype']['uuid']());
  });

export default command;
