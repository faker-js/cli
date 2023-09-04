import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('preposition')
  .description(`Generates a preposition of random length.`)
  .action(() => {
    console.log(faker.word.preposition());
  });

export default command;
