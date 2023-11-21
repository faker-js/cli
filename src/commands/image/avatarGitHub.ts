import { Command } from 'commander';

const command = new Command('avatarGitHub')
  .description(`Generates a random avatar from GitHub.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.avatarGitHub());
  });

export default command;
