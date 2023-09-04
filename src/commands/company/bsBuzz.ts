import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bsBuzz')
  .description(`Generates a random company bs buzz word.`)
  .action(() => {
    console.log(faker.company.bsBuzz());
  });

export default command;
