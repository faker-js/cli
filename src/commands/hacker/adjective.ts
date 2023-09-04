import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('adjective')
  .description(`Generates a random hacker/IT adjective.`)
  .action(() => {
    console.log(faker.hacker.adjective());
  });

export default command;
