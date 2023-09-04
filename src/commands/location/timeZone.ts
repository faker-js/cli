import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('timeZone')
  .description(`Generates a random time zone.`)
  .action(() => {
    console.log(faker.location.timeZone());
  });

export default command;
