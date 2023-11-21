import { Command } from 'commander';

const command = new Command('city')
  .description(`Generates a random city image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.city());
  });

export default command;
