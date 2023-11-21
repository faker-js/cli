import { Command } from 'commander';

const command = new Command('unit')
  .description(`Returns a random scientific unit.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.science.unit());
  });

export default command;
