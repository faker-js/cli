import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('latitude')
  .description(`Generates a random latitude.`)
  .action(() => {
    console.log(faker.location.latitude());
  });

export default command;
