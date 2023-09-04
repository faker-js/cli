import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bsNoun')
  .description(`Generates a random company bs noun.`)
  .action(() => {
    console.log(faker.company.bsNoun());
  });

export default command;
