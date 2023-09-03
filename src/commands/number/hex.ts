import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('hex')
  .description(
    `Returns a lowercase [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) number.`,
  )
  .action(() => {
    console.log(faker['number']['hex']());
  });

export default command;
