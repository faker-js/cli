import { Command } from 'commander';

const command = new Command('word')
  .description(`Generates a word of a specified length.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.word());
  });

export default command;
