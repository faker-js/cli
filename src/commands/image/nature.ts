import { Command } from 'commander';

const command = new Command('nature')
  .description(`Generates a random nature image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.nature());
  });

export default command;
