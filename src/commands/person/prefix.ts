import { Command } from 'commander';

const command = new Command('prefix')
  .description(`Returns a random person prefix.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.prefix());
  });

export default command;
