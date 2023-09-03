import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commonFileName')
  .description(
    `Returns a random file name with a given extension or a commonly used extension.`,
  )
  .action(() => {
    console.log(faker['system']['commonFileName']());
  });

export default command;
