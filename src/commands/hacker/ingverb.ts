import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('ingverb')
  .description(
    `Generates a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).`,
  )
  .action(() => {
    console.log(faker.hacker.ingverb());
  });

export default command;
