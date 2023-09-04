import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('avatarGitHub')
  .description(`Generates a random avatar from GitHub.`)
  .action(() => {
    console.log(faker.image.avatarGitHub());
  });

export default command;
