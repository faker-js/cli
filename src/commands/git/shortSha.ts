import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('shortSha')
  .description(`Generates a random commit sha (short).`)
  .action(() => {
    console.log(faker['git']['shortSha']());
  });

export default command;
