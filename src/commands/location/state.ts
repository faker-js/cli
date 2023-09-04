import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('state')
  .description(
    `Returns a random localized state, or other equivalent first-level administrative entity for the locale's country such as a province or region.`,
  )
  .action(() => {
    console.log(faker.location.state());
  });

export default command;
