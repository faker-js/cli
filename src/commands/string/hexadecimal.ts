import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('hexadecimal')
  .description(
    `Returns a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) string.`,
  )
  .action(() => {
    console.log(faker['string']['hexadecimal']());
  });

export default command;
