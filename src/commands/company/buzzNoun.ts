import { Command } from 'commander';

const command = new Command('buzzNoun')
  .description(
    `Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.buzzNoun());
  });

export default command;
