import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('ipv6')
  .description(`Generates a random IPv6 address.`)
  .action(() => {
    console.log(faker['internet']['ipv6']());
  });

export default command;
