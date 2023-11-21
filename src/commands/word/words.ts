import { Command } from 'commander';

const command = new Command('words')
  .description(
    `Returns a string containing a number of space separated random words.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.words());
  });

export default command;
