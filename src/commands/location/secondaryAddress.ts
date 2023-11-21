import { Command } from 'commander';

const command = new Command('secondaryAddress')
  .description(
    `Generates a random localized secondary address. This refers to a specific location at a given address
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.secondaryAddress());
  });

export default command;
