import { Command } from 'commander';

const command = new Command('buzzVerb')
  .description(
    `Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.buzzVerb());
  });

export default command;
