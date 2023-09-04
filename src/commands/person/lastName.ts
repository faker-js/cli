import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lastName')
  .description(`Generates a random last name.`)
  .action(() => {
    console.log(faker.person.lastName());
  });

export default command;
