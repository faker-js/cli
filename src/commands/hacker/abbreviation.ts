import { Command } from 'commander';

const command = new Command('abbreviation')
  .description(`Returns a random hacker/IT abbreviation.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.hacker.abbreviation());
  });

export default command;
