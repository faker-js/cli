import { Command } from 'commander';

const command = new Command('displayName')
  .description(
    `Generates a display name using the given person's name as base.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.displayName());
  });

export default command;
