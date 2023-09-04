import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('word')
  .description(`Generates a word of a specified length.`)
  .action(() => {
    console.log(faker.lorem.word());
  });

export default command;
