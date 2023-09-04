import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bsNoun')
  .description(`Returns a random company bs noun.`)
  .action(() => {
    console.log(faker.company.bsNoun());
  });

export default command;
