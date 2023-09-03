import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('space')
  .description(
    `Returns a random color space name from the worldwide accepted color spaces.`,
  )
  .action(() => {
    console.log(faker['color']['space']());
  });

export default command;
