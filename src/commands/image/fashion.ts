import { Command } from 'commander';

const command = new Command('fashion')
  .description(`Generates a random fashion image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.fashion());
  });

export default command;
