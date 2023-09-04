import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cats')
  .description(`Generates a random cat image url.`)
  .action(() => {
    console.log(faker.image.cats());
  });

export default command;
