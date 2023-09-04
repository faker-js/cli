import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('type')
  .description(`Generates a random database column type.`)
  .action(() => {
    console.log(faker.database.type());
  });

export default command;
