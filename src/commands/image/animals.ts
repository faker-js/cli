import { Command } from 'commander';

const command = new Command('animals')
  .description(`Generates a random animal image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.animals());
  });

export default command;
