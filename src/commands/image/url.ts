import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('url')
  .description(`Generates a random image url.`)
  .action(() => {
    console.log(faker.image.url());
  });

export default command;
