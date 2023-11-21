import { Command } from 'commander';

const command = new Command('userAgent')
  .description(`Generates a random user agent string.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.userAgent());
  });

export default command;
