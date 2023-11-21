import { Command } from 'commander';

const command = new Command('shortSha')
  .description(`Generates a random commit sha (short).`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.git.shortSha());
  });

export default command;
