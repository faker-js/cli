import { Command } from 'commander';

const command = new Command('catchPhraseAdjective')
  .description(
    `Returns a random catch phrase adjective that can be displayed to an end user..`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.catchPhraseAdjective());
  });

export default command;
