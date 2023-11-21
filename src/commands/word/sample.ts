import { Command } from 'commander';

const command = new Command('sample')
  .description(
    `Returns a random sample of random or optionally specified length.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.sample());
  });

export default command;
