import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('mac')
  .description(`Generates a random mac address.`)
  .action(() => {
    console.log(faker['internet']['mac']());
  });

export default command;
