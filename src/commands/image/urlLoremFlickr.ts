import { Command } from 'commander';

const command = new Command('urlLoremFlickr')
  .description(
    `Generates a random image url provided via https://loremflickr.com.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.urlLoremFlickr());
  });

export default command;
