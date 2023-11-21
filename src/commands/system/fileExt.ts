import { Command } from 'commander';

const command = new Command('fileExt')
  .description(`Returns a file extension.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.fileExt());
  });

export default command;
