import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('suffix')
  .description(`Returns a random person suffix.`)
  .action(() => {
    console.log(faker.person.suffix());
  });

export default command;
