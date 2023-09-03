import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('direction')
  .description(
    `Returns a random direction (cardinal and ordinal; northwest, east, etc).`,
  )
  .action(() => {
    console.log(faker['location']['direction']());
  });

export default command;
