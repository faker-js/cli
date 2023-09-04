import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('networkInterface')
  .description(`Generates a random network interface.`)
  .action(() => {
    console.log(faker.system.networkInterface());
  });

export default command;
