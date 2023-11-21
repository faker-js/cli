import { Command } from 'commander';

const command = new Command('commonFileName')
  .description(
    `Returns a random file name with a given extension or a commonly used extension.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.commonFileName());
  });

export default command;
