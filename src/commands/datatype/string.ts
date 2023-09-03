import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('string')
  .description(
    `Returns a string containing UTF-16 chars between 33 and 125 (\`!\` to \`}\`).`,
  )
  .action(() => {
    console.log(faker['datatype']['string']());
  });

export default command;
