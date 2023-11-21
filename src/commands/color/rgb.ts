import { Command } from 'commander';

const command = new Command('rgb')
  .description(`Returns an RGB color.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.rgb());
  });

export default command;
