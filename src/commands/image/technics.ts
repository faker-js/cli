import { Command } from 'commander';

const command = new Command('technics')
  .description(`Generates a random technics image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.technics());
  });

export default command;
