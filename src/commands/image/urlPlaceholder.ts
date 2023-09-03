import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('urlPlaceholder')
  .description(
    `Generates a random image url provided via https://via.placeholder.com/.`,
  )
  .action(() => {
    console.log(faker['image']['urlPlaceholder']());
  });

export default command;
