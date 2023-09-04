import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bear')
  .description(`Generates a random bear species.`)
  .action(() => {
    console.log(faker.animal.bear());
  });

export default command;
