import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('snake')
  .description(`Generates a random snake species.`)
  .action(() => {
    console.log(faker.animal.snake());
  });

export default command;
