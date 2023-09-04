import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('words')
  .description(`Generates a space separated list of words.`)
  .action(() => {
    console.log(faker.lorem.words());
  });

export default command;
