import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('domainWord')
  .description(`Generates a random domain word.`)
  .action(() => {
    console.log(faker.internet.domainWord());
  });

export default command;
