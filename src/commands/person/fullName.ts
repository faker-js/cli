import { Command } from 'commander';

const command = new Command('fullName')
  .description(`Generates a random full name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.fullName());
  });

export default command;
