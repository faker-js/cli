import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('companySuffix')
  .description(`Generates a random company suffix.`)
  .action(() => {
    console.log(faker.company.companySuffix());
  });

export default command;
