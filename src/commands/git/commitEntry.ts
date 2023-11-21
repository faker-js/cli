import { Command } from 'commander';

const command = new Command('commitEntry')
  .description(`Generates a random commit entry as printed by \`git log\`.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.git.commitEntry());
  });

export default command;
