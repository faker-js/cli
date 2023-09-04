import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('verb')
  .description(`Generates a verb of random length.`)
  .action(() => {
    console.log(faker.word.verb());
  });

export default command;
