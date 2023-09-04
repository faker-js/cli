import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('slug')
  .description(
    `Generates a slugified text consisting of the given number of hyphen separated words.`,
  )
  .action(() => {
    console.log(faker.lorem.slug());
  });

export default command;
