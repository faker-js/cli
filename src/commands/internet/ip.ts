import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('ip')
  .description(`Generates a random IPv4 or IPv6 address.`)
  .action(() => {
    console.log(faker['internet']['ip']());
  });

export default command;
