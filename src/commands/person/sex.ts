import { Command } from 'commander';

const command = new Command('sex')
  .description(
    `Returns a random sex.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.sex());
  });

export default command;
