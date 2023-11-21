import { Command } from 'commander';

const command = new Command('ipv4')
  .description(`Generates a random IPv4 address.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.ipv4());
  });

export default command;
