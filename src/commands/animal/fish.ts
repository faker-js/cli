import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('fish')
  .description(`Generates a random fish species.`)
  .action(() => {
    console.log(faker.animal.fish());
  });

export default command;
