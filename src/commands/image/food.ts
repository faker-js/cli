import { Command } from 'commander';

const command = new Command('food')
  .description(`Generates a random food image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.food());
  });

export default command;
