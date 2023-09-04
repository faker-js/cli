import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('catchPhraseDescriptor')
  .description(
    `Generates a random catch phrase descriptor that can be displayed to an end user.`,
  )
  .action(() => {
    console.log(faker.company.catchPhraseDescriptor());
  });

export default command;
