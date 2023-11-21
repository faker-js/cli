import { Command } from 'commander';

const command = new Command('urlPicsumPhotos')
  .description(
    `Generates a random image url provided via https://picsum.photos.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.urlPicsumPhotos());
  });

export default command;
