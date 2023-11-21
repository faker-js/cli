import { Command } from 'commander';

const command = new Command('buzzPhrase')
  .description(
    `Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.buzzPhrase());
  });

export default command;
