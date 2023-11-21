import { Command } from 'commander';

const command = new Command('catchPhraseDescriptor')
  .description(
    `Returns a random catch phrase descriptor that can be displayed to an end user..`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.catchPhraseDescriptor());
  });

export default command;
