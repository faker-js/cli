import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('buzzNoun')
  .description(
    `Generates a random buzz noun that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(() => {
    console.log(faker.company.buzzNoun());
  });

export default command;
