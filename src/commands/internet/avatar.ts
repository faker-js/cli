import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('avatar')
  .description(`Returns a random avatar url.`)
  .action(() => {
    console.log(faker.internet.avatar());
  });

export default command;
