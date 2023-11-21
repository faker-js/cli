import { Command } from 'commander';

const command = new Command('sports')
  .description(`Generates a random sports image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.sports());
  });

export default command;
