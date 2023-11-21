import { Command } from 'commander';

const command = new Command('userName')
  .description(
    `Generates a username using the given person's name as base.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.userName());
  });

export default command;
