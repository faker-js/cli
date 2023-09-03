import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commitMessage')
  .description(`Generates a random commit message.`)
  .action(() => {
    console.log(faker['git']['commitMessage']());
  });

export default command;
