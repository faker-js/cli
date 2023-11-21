import { Command } from 'commander';

const command = new Command('cow')
  .description(`Returns a random cow species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.cow());
  });

export default command;
