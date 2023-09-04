import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('catchPhraseAdjective')
  .description(
    `Generates a random catch phrase adjective that can be displayed to an end user.`,
  )
  .action(() => {
    console.log(faker.company.catchPhraseAdjective());
  });

export default command;
