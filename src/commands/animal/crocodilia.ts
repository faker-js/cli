import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('crocodilia')
  .description(`Generates a random crocodilian species.`)
  .action(() => {
    console.log(faker.animal.crocodilia());
  });

export default command;
