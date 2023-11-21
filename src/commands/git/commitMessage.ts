import { Command } from 'commander';

const command = new Command('commitMessage')
  .description(`Generates a random commit message.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.git.commitMessage());
  });

export default command;
