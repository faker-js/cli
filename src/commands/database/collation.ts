import { Command } from 'commander';

const command = new Command('collation')
  .description(`Returns a random database collation.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.database.collation());
  });

export default command;
