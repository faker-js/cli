import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('adjective')
  .description(`Generates an adjective of random length.`)
  .action(() => {
    console.log(faker.word.adjective());
  });

export default command;
