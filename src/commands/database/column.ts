import { Command } from 'commander';

const command = new Command('column')
  .description(`Returns a random database column name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.database.column());
  });

export default command;
