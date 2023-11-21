import { Command } from 'commander';

const command = new Command('snake')
  .description(`Returns a random snake species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.snake());
  });

export default command;
