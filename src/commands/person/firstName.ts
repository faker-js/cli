import { Command } from 'commander';

const command = new Command('firstName')
  .description(`Returns a random first name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.firstName());
  });

export default command;
