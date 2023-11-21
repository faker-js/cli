import { Command } from 'commander';

const command = new Command('ipv6')
  .description(`Generates a random IPv6 address.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.ipv6());
  });

export default command;
