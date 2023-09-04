import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('branch')
  .description(`Generates a random branch name.`)
  .action(() => {
    console.log(faker.git.branch());
  });

export default command;
