import { Command } from 'commander';

const command = new Command('currencyCode')
  .description(
    `Returns a random currency code.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.currencyCode());
  });

export default command;
