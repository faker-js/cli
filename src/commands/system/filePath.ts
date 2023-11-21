import { Command } from 'commander';

const command = new Command('filePath')
  .description(`Returns a file path.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.filePath());
  });

export default command;
