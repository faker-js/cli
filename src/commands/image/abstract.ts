import { Command } from 'commander';

const command = new Command('abstract')
  .description(`Generates a random abstract image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.abstract());
  });

export default command;
