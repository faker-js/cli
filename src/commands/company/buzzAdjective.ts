import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('buzzAdjective')
  .description(
    `Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(() => {
    console.log(faker.company.buzzAdjective());
  });

export default command;
