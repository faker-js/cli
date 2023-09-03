import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('zipCodeByState')
  .description(`Generates random zip code from state abbreviation.`)
  .action(() => {
    console.log(faker['location']['zipCodeByState']());
  });

export default command;
