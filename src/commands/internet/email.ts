import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('email')
  .description(`Generates an email address.`)
  .action(() => {
    console.log(faker.internet.email());
  });

export default command;
