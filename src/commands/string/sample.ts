import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sample')
  .description(
    `Returns a string containing UTF-16 chars between 33 and 125 (\`!\` to \`}\`).`,
  )
  .action(() => {
    console.log(faker['string']['sample']());
  });

export default command;
