import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commitEntry')
  .description(`Generates a random commit entry as printed by \`git log\`.`)
  .action(() => {
    console.log(faker['git']['commitEntry']());
  });

export default command;
