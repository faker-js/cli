import { Command } from 'commander';

const command = new Command('cats')
  .description(`Generates a random cat image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.cats());
  });

export default command;
