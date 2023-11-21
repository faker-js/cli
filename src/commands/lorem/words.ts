import { Command } from 'commander';

const command = new Command('words')
  .description(`Generates a space separated list of words.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.words());
  });

export default command;
