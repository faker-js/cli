import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('interjection')
  .description(`Generates an interjection of random length.`)
  .action(() => {
    console.log(faker.word.interjection());
  });

export default command;
