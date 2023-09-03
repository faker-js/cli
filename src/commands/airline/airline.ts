import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('airline')
  .description(`Generates a random airline.`)
  .action(() => {
    console.log(faker['airline']['airline']());
  });

export default command;
