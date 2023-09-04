import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('url')
  .description(`Generates a random http(s) url.`)
  .action(() => {
    console.log(faker.internet.url());
  });

export default command;
