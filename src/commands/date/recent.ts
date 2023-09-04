import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('recent')
  .description(`Generates a random date in the recent past.`)
  .action(() => {
    console.log(faker.date.recent());
  });

export default command;
