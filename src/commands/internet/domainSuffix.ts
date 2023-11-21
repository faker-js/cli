import { Command } from 'commander';

const command = new Command('domainSuffix')
  .description(`Returns a random domain suffix.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.domainSuffix());
  });

export default command;
