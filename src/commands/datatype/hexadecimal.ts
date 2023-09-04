import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('hexadecimal')
  .description(
    `Returns a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) number.`,
  )
  .action(() => {
    console.log(faker.datatype.hexadecimal());
  });

export default command;
