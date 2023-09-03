import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bic')
  .description(
    `Generates a random SWIFT/BIC code based on the [ISO-9362](https://en.wikipedia.org/wiki/ISO_9362) format.`,
  )
  .action(() => {
    console.log(faker['finance']['bic']());
  });

export default command;
