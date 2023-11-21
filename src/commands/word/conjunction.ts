import { Command } from 'commander';

const command = new Command('conjunction')
  .description(
    `Returns a conjunction of random or optionally specified length.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.conjunction());
  });

export default command;
