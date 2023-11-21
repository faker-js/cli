import { Command } from 'commander';

const command = new Command('domainName')
  .description(`Generates a random domain name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.domainName());
  });

export default command;
