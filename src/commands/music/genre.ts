import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('genre')
  .description(`Generates a random music genre.`)
  .action(() => {
    console.log(faker.music.genre());
  });

export default command;
