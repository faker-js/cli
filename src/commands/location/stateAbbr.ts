import { Command } from 'commander';

const command = new Command('stateAbbr')
  .description(
    `Returns a random localized state's abbreviated name from this country.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.stateAbbr());
  });

export default command;
