import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('abstract')
  .description(`Generates a random abstract image url.`)
  .action(() => {
    console.log(faker.image.abstract());
  });

export default command;
