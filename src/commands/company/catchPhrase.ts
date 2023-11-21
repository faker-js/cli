import { Command } from 'commander';

const command = new Command('catchPhrase')
  .description(
    `Generates a random catch phrase that can be displayed to an end user.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.catchPhrase());
  });

export default command;
