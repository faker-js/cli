import { Command } from 'commander';

const command = new Command('lines')
  .description(
    `Generates the given number lines of lorem separated by \`'\n'\`.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.lines());
  });

export default command;
