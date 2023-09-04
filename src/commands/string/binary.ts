import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('binary')
  .description(
    `Returns a [binary](https://en.wikipedia.org/wiki/Binary_number) string.`,
  )
  .action(() => {
    console.log(faker.string.binary());
  });

export default command;
