import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('userAgent')
  .description(`Generates a random user agent string.`)
  .action(() => {
    console.log(faker['internet']['userAgent']());
  });

export default command;
