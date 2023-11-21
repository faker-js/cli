import { Command } from 'commander';

const command = new Command('people')
  .description(`Generates a random people image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.people());
  });

export default command;
