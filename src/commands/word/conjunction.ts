import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('conjunction')
  .description(`Generates a conjunction of random length.`)
  .action(() => {
    console.log(faker.word.conjunction());
  });

export default command;
