import { Command } from 'commander';

const command = new Command('sentences')
  .description(`Generates the given number of sentences.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.sentences());
  });

export default command;
