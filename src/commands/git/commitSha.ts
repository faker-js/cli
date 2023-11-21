import { Command } from 'commander';

const command = new Command('commitSha')
  .description(
    `Generates a random commit sha.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.git.commitSha());
  });

export default command;
