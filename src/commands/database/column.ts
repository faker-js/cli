import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('column')
  .description(`Generates a random database column name.`)
  .action(() => {
    console.log(faker.database.column());
  });

export default command;
