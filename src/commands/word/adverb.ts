import { Command } from 'commander';

const command = new Command('adverb')
  .description(`Returns an adverb of random or optionally specified length.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.word.adverb());
  });

export default command;
