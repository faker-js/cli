import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('semver')
  .description(`Returns a [semantic version](https://semver.org).`)
  .action(() => {
    console.log(faker['system']['semver']());
  });

export default command;
