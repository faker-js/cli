import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('binary')
  .description(
    `Returns a [binary](https://en.wikipedia.org/wiki/Binary_number) number.`,
  )
  .action(() => {
    console.log(faker.number.binary());
  });

export default command;
