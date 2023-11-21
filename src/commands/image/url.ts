import { Command } from 'commander';

const command = new Command('url')
  .description(`Generates a random image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.url());
  });

export default command;
