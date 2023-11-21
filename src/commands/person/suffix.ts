import { Command } from 'commander';

const command = new Command('suffix')
  .description(`Returns a random person suffix.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.suffix());
  });

export default command;
