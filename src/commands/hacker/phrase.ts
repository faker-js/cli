import { Command } from 'commander';

const command = new Command('phrase')
  .description(`Generates a random hacker/IT phrase.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.hacker.phrase());
  });

export default command;
