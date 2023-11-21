import { Command } from 'commander';

const command = new Command('bic')
  .description(
    `Generates a random SWIFT/BIC code based on the [ISO-9362](https://en.wikipedia.org/wiki/ISO_9362) format.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.bic());
  });

export default command;
