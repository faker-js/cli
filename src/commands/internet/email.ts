import { Command } from 'commander';

const command = new Command('email')
  .description(
    `Generates an email address using the given person's name as base.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.email());
  });

export default command;
