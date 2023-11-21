import { Command } from 'commander';

const command = new Command('ip')
  .description(`Generates a random IPv4 or IPv6 address.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.ip());
  });

export default command;
