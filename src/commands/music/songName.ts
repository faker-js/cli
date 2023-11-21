import { Command } from 'commander';

const command = new Command('songName')
  .description(`Returns a random song name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.music.songName());
  });

export default command;
