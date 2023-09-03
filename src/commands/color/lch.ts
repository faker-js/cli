import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lch')
  .description(`Returns an LCH color. Even though upper bound of`)
  .action(() => {
    console.log(faker['color']['lch']());
  });

export default command;
