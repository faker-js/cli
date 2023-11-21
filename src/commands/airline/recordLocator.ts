import { Command } from 'commander';

const command = new Command('recordLocator')
  .description(
    `Generates a random [record locator](https://en.wikipedia.org/wiki/Record_locator). Record locators
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.airline.recordLocator());
  });

export default command;
