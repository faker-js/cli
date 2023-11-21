import { Command } from 'commander';

const command = new Command('dataUri')
  .description(
    `Generates a random data uri containing an URL-encoded SVG image or a Base64-encoded SVG image.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.dataUri());
  });

export default command;
