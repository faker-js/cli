import { Command } from 'commander';

const command = new Command('isbn')
  .description(
    `Returns a random [ISBN](https://en.wikipedia.org/wiki/ISBN) identifier.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.isbn());
  });

export default command;
