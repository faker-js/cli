import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('httpStatusCode')
  .description(`Generates a random HTTP status code.`)
  .action(() => {
    console.log(faker.internet.httpStatusCode());
  });

export default command;
