import { Command } from 'commander';

const command = new Command('countryCode')
  .description(
    `Returns a random [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.countryCode());
  });

export default command;
