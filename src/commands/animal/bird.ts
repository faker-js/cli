import { Command } from 'commander';

const command = new Command('bird')
  .description(`Returns a random bird species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.bird());
  });

export default command;
