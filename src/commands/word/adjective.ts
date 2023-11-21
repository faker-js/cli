import { Command } from 'commander';

const command = new Command('adjective')
  .description(`Returns an adjective of random or optionally specified length.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.adjective());
  });

export default command;
