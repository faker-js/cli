import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('domainSuffix')
  .description(`Returns a random domain suffix.`)
  .action(() => {
    console.log(faker['internet']['domainSuffix']());
  });

export default command;
