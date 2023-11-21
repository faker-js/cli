import { Command } from 'commander';

const command = new Command('commonFileExt')
  .description(`Returns a commonly used file extension.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.commonFileExt());
  });

export default command;
