import { Command } from 'commander';

const command = new Command('sexType')
  .description(`Returns a random sex type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.sexType());
  });

export default command;
