import { Command } from 'commander';

const command = new Command('lastName')
  .description(`Returns a random last name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.lastName());
  });

export default command;
