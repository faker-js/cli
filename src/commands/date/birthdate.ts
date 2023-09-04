import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('birthdate')
  .description(`Generates a random birthdate.`)
  .action(() => {
    console.log(faker.date.birthdate());
  });

export default command;
