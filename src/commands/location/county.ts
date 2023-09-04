import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('county')
  .description(
    `Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.`,
  )
  .action(() => {
    console.log(faker.location.county());
  });

export default command;
