import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lion')
  .description(`Returns a random lion species.`)
  .action(() => {
    console.log(faker.animal.lion());
  });

export default command;
