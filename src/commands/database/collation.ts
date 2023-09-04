import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('collation')
  .description(`Returns a random database collation.`)
  .action(() => {
    console.log(faker.database.collation());
  });

export default command;
