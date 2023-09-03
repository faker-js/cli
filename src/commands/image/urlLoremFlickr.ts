import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('urlLoremFlickr')
  .description(
    `Generates a random image url provided via https://loremflickr.com.`,
  )
  .action(() => {
    console.log(faker['image']['urlLoremFlickr']());
  });

export default command;
