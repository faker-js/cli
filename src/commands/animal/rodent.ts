import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('rodent')
  .description(`Returns a random rodent breed.`)
  .action(() => {
    console.log(faker.animal.rodent());
  });

export default command;
