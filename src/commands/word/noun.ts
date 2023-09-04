import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('noun')
  .description(`Generates a noun of random length.`)
  .action(() => {
    console.log(faker.word.noun());
  });

export default command;
