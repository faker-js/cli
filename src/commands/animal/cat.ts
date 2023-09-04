import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cat')
  .description(`Generates a random cat breed.`)
  .action(() => {
    console.log(faker.animal.cat());
  });

export default command;
