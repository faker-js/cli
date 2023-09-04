import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('horse')
  .description(`Generates a random horse breed.`)
  .action(() => {
    console.log(faker.animal.horse());
  });

export default command;
