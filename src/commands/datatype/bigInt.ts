import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bigInt')
  .description(`Generates a BigInt number.`)
  .action(() => {
    console.log(faker.datatype.bigInt());
  });

export default command;
