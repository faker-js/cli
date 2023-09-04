import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('octal')
  .description(
    `Returns an [octal](https://en.wikipedia.org/wiki/Octal) string.`,
  )
  .action(() => {
    console.log(faker.string.octal());
  });

export default command;
