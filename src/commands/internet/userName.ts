import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('userName')
  .description(`Generates a username.`)
  .action(() => {
    console.log(faker.internet.userName());
  });

export default command;
