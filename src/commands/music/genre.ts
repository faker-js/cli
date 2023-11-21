import { Command } from 'commander';

const command = new Command('genre')
  .description(`Returns a random music genre.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.music.genre());
  });

export default command;
