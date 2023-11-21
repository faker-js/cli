import { Command } from 'commander';

const command = new Command('ingverb')
  .description(
    `Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.hacker.ingverb());
  });

export default command;
