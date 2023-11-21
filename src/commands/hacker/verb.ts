import { Command } from 'commander';

const command = new Command('verb')
  .description(`Returns a random hacker/IT verb.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.hacker.verb());
  });

export default command;
