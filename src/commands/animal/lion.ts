import { Command } from 'commander';

const command = new Command('lion')
  .description(`Returns a random lion species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.lion());
  });

export default command;
