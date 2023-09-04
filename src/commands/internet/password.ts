import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('password')
  .description(
    `Generates a random password-like string. Do not use this method for generating actual passwords for users.`,
  )
  .action(() => {
    console.log(faker.internet.password());
  });

export default command;
