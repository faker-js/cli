import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('number')
  .description(`Generates a single random number between zero and 99999.`)
  .action(() => {
    console.log(faker.datatype.number());
  });

export default command;
