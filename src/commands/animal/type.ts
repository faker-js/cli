import { Command } from 'commander';

const command = new Command('type')
  .description(`Returns a random animal type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.type());
  });

export default command;
