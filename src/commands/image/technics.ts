import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('technics')
  .description(`Generates a random technics image url.`)
  .action(() => {
    console.log(faker.image.technics());
  });

export default command;
