import { Command } from 'commander';

const command = new Command('branch')
  .description(`Generates a random branch name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.git.branch());
  });

export default command;
