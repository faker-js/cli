import { Command } from 'commander';

const command = new Command('commitDate')
  .description(
    `Generates a date string for a git commit using the same format as \`git log\`.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.git.commitDate());
  });

export default command;
