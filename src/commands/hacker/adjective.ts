import { Command } from 'commander';

const command = new Command('adjective')
  .description(`Returns a random hacker/IT adjective.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.hacker.adjective());
  });

export default command;
