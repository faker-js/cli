import { Command } from 'commander';

const command = new Command('mimeType')
  .description(`Returns a mime-type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.mimeType());
  });

export default command;
