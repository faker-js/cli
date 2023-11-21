import { Command } from 'commander';

const command = new Command('emoji')
  .description(`Generates a random emoji.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.emoji());
  });

export default command;
