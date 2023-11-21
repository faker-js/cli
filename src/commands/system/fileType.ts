import { Command } from 'commander';

const command = new Command('fileType')
  .description(`Returns a file type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.fileType());
  });

export default command;
