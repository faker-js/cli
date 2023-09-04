import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('countryCode')
  .description(`Generates a random ISO_3166-1 country code.`)
  .action(() => {
    console.log(faker.location.countryCode());
  });

export default command;
