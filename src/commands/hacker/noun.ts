import { Command } from 'commander';

const command = new Command('noun')
  .description(`Returns a random hacker/IT noun.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.hacker.noun());
  });

export default command;
