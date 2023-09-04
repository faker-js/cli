import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('octal')
  .description(
    `Returns an [octal](https://en.wikipedia.org/wiki/Octal) number.`,
  )
  .action(() => {
    console.log(faker.number.octal());
  });

export default command;
