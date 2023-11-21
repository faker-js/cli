import { Command } from 'commander';

const command = new Command('human')
  .description(`Returns a random human-readable color name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.human());
  });

export default command;
