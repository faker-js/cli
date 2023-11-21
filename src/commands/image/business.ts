import { Command } from 'commander';

const command = new Command('business')
  .description(`Generates a random business image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.business());
  });

export default command;
