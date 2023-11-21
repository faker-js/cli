import { Command } from 'commander';

const command = new Command('avatar')
  .description(`Returns a random avatar url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.avatar());
  });

export default command;
