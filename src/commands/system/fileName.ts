import { Command } from 'commander';

const command = new Command('fileName')
  .description(`Returns a random file name with extension.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.fileName());
  });

export default command;
