import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('hex')
  .description(`Generates a lowercase hexadecimal number.`)
  .action(() => {
    console.log(faker.number.hex());
  });

export default command;
