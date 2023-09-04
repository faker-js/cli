import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('songName')
  .description(`Generates a random song name.`)
  .action(() => {
    console.log(faker.music.songName());
  });

export default command;
