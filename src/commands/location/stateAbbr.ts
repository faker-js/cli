import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('stateAbbr')
  .description(
    `Returns a random localized state's abbreviated name from this country.`,
  )
  .action(() => {
    console.log(faker.location.stateAbbr());
  });

export default command;
