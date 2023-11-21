import { Command } from 'commander';

const command = new Command('directoryPath')
  .description(`Returns a directory path.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.directoryPath());
  });

export default command;
