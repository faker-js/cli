import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('urlPicsumPhotos')
  .description(
    `Generates a random image url provided via https://picsum.photos.`,
  )
  .action(() => {
    console.log(faker.image.urlPicsumPhotos());
  });

export default command;
