import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('phrase')
  .description(`Generates a random hacker/IT phrase.`)
  .action(() => {
    console.log(faker.hacker.phrase());
  });

export default command;
