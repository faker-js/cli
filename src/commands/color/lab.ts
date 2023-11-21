import { Command } from 'commander';

const command = new Command('lab')
  .description(`Returns a LAB (CIELAB) color.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.lab());
  });

export default command;
