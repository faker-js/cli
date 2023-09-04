import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('adverb')
  .description(`Generates an adverb of random length.`)
  .action(() => {
    console.log(faker.word.adverb());
  });

export default command;
