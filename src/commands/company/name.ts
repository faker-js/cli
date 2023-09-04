import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('name')
  .description(`Generates a random company name.`)
  .action(() => {
    console.log(faker.company.name());
  });

export default command;
