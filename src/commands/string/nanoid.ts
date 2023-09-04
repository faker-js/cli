import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('nanoid')
  .description(`Generates a Nano ID.`)
  .action(() => {
    console.log(faker.string.nanoid());
  });

export default command;
