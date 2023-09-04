import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bsAdjective')
  .description(`Generates a random company bs adjective.`)
  .action(() => {
    console.log(faker.company.bsAdjective());
  });

export default command;
