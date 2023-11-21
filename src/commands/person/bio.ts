import { Command } from 'commander';

const command = new Command('bio')
  .description(`Returns a random short biography`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.bio());
  });

export default command;
