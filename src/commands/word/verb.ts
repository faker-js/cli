import { Command } from 'commander';

const command = new Command('verb')
  .description(`Returns a verb of random or optionally specified length.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.verb());
  });

export default command;
