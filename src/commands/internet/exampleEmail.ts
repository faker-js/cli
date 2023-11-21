import { Command } from 'commander';

const command = new Command('exampleEmail')
  .description(
    `Generates an email address using an example mail provider using the given person's name as base.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.exampleEmail());
  });

export default command;
