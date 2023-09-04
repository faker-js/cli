import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('noun')
  .description(`Generates a random hacker/IT noun.`)
  .action(() => {
    console.log(faker.hacker.noun());
  });

export default command;
