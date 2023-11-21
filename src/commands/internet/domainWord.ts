import { Command } from 'commander';

const command = new Command('domainWord')
  .description(`Generates a random domain word.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.domainWord());
  });

export default command;
