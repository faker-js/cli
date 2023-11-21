import { Command } from 'commander';

const command = new Command('text')
  .description(`Generates a random text based on a random lorem method.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.text());
  });

export default command;
