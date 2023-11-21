import { Command } from 'commander';

const command = new Command('image')
  .description(
    `Generates a random image url from one of the supported categories.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.image());
  });

export default command;
