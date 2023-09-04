import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('semver')
  .description(`Generates a semantic version.`)
  .action(() => {
    console.log(faker.system.semver());
  });

export default command;
