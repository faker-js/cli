import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bird')
  .description(`Returns a random bird species.`)
  .action(() => {
    console.log(faker.animal.bird());
  });

export default command;
