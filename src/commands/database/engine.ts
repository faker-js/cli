import { Command } from 'commander';

const command = new Command('engine')
  .description(`Returns a random database engine.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.database.engine());
  });

export default command;
