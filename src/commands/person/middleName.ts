import { Command } from 'commander';

const command = new Command('middleName')
  .description(`Returns a random middle name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.middleName());
  });

export default command;
