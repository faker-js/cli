import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fullName')
  .description(`Generates a random full name.`)
  .action(() => {
    console.log(faker.person.fullName());
  });

export default command;
