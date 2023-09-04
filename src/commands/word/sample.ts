import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sample')
  .description(
    `Returns a random sample of random or optionally specified length.`,
  )
  .action(() => {
    console.log(faker.word.sample());
  });

export default command;
