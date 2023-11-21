import { Command } from 'commander';

const command = new Command('zipCodeByState')
  .description(
    `Generates random zip code from state abbreviation.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.zipCodeByState());
  });

export default command;
