import { Command } from 'commander';

const command = new Command('noun')
  .description(`Returns a noun of random or optionally specified length.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.noun());
  });

export default command;
