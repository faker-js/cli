import { Command } from 'commander';

const command = new Command('paragraph')
  .description(`Generates a paragraph with the given number of sentences.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.paragraph());
  });

export default command;
