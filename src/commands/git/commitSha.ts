import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commitSha')
  .description(`Generates a random commit sha.`)
  .action(() => {
    console.log(faker.git.commitSha());
  });

export default command;
