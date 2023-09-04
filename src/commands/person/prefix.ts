import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('prefix')
  .description(`Returns a random person prefix.`)
  .action(() => {
    console.log(faker.person.prefix());
  });

export default command;
