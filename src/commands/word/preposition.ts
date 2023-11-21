import { Command } from 'commander';

const command = new Command('preposition')
  .description(
    `Returns a preposition of random or optionally specified length.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.preposition());
  });

export default command;
