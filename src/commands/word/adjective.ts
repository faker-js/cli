import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('adjective')
  .description(`Returns an adjective of random or optionally specified length.`)
  .action(() => {
    console.log(faker.word.adjective());
  });

export default command;
