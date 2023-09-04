import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lion')
  .description(`Generates a random lion species.`)
  .action(() => {
    console.log(faker.animal.lion());
  });

export default command;
