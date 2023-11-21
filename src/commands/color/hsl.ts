import { Command } from 'commander';

const command = new Command('hsl')
  .description(`Returns an HSL color.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.hsl());
  });

export default command;
