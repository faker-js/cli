import { Command } from 'commander';

const command = new Command('gender')
  .description(`Returns a random gender.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.gender());
  });

export default command;
