import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('ipv4')
  .description(`Generates a random IPv4 address.`)
  .action(() => {
    console.log(faker['internet']['ipv4']());
  });

export default command;
