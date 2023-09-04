import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('city')
  .description(`Generates a random city image url.`)
  .action(() => {
    console.log(faker.image.city());
  });

export default command;
