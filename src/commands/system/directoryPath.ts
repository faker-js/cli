import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('directoryPath')
  .description(`Returns a directory path.`)
  .action(() => {
    console.log(faker['system']['directoryPath']());
  });

export default command;
