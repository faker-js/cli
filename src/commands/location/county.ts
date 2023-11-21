import { Command } from 'commander';

const command = new Command('county')
  .description(
    `Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.county());
  });

export default command;
