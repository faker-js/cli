import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('weekday')
  .description(`Generates a random day of the week.`)
  .action(() => {
    console.log(faker.date.weekday());
  });

export default command;
