import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('domainName')
  .description(`Generates a random domain name.`)
  .action(() => {
    console.log(faker.internet.domainName());
  });

export default command;
