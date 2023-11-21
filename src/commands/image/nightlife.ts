import { Command } from 'commander';

const command = new Command('nightlife')
  .description(`Generates a random nightlife image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.nightlife());
  });

export default command;
