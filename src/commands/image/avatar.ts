import { Command } from 'commander';

const command = new Command('avatar')
  .description(`Generates a random avatar image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.avatar());
  });

export default command;
