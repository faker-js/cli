import { Command } from 'commander';

const command = new Command('interjection')
  .description(
    `Returns an interjection of random or optionally specified length.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.interjection());
  });

export default command;
