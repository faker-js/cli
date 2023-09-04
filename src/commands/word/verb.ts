import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('verb')
  .description(`Returns a verb of random or optionally specified length.`)
  .action(() => {
    console.log(faker.word.verb());
  });

export default command;
