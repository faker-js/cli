import { Command } from 'commander';

const command = new Command('commonFileType')
  .description(`Returns a commonly used file type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.commonFileType());
  });

export default command;
