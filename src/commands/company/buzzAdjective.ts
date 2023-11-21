import { Command } from 'commander';

const command = new Command('buzzAdjective')
  .description(
    `Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.buzzAdjective());
  });

export default command;
