import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('gender')
  .description(`Generates a random gender.`)
  .action(() => {
    console.log(faker.person.gender());
  });

export default command;
