import { Command } from 'commander';

const command = new Command('bear')
  .description(`Returns a random bear species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.bear());
  });

export default command;
