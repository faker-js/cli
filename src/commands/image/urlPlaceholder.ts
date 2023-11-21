import { Command } from 'commander';

const command = new Command('urlPlaceholder')
  .description(
    `Generates a random image url provided via https://via.placeholder.com/.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.urlPlaceholder());
  });

export default command;
