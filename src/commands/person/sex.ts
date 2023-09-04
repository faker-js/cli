import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sex')
  .description(`Generates a random sex.`)
  .action(() => {
    console.log(faker.person.sex());
  });

export default command;
