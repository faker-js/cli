import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('airplane')
  .description(`Generates a random airplane.`)
  .action(() => {
    console.log(faker.airline.airplane());
  });

export default command;
