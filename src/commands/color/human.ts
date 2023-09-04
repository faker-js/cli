import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('human')
  .description(`Generates a random human readable color name.`)
  .action(() => {
    console.log(faker.color.human());
  });

export default command;
