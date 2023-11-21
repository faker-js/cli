import { Command } from 'commander';

const command = new Command('zipCode')
  .description(
    `Generates random zip code from specified format. If format is not specified,
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.zipCode());
  });

export default command;
