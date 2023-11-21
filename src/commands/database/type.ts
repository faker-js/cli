import { Command } from 'commander';

const command = new Command('type')
  .description(`Returns a random database column type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.database.type());
  });

export default command;
