import { Command } from 'commander';

const command = new Command('lch')
  .description(
    `Returns an LCH color. Even though upper bound of
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.lch());
  });

export default command;
