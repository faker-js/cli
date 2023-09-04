import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('engine')
  .description(`Generates a random database engine.`)
  .action(() => {
    console.log(faker.database.engine());
  });

export default command;
