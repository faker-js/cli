import { Command } from 'commander';

const command = new Command('paragraphs')
  .description(`Generates the given number of paragraphs.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.paragraphs());
  });

export default command;
