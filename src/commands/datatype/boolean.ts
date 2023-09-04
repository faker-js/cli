import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('boolean')
  .description(`Generates the boolean value true or false.`)
  .action(() => {
    console.log(faker.datatype.boolean());
  });

export default command;
