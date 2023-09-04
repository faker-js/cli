import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sample')
  .description(`Generates a random sample of random length.`)
  .action(() => {
    console.log(faker.word.sample());
  });

export default command;
