import { Command } from 'commander';

const command = new Command('state')
  .description(
    `Returns a random localized state, or other equivalent first-level administrative entity for the locale's country such as a province or region.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.state());
  });

export default command;
