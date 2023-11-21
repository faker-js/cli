import { Command } from 'commander';

const command = new Command('crocodilia')
  .description(`Returns a random crocodilian species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.crocodilia());
  });

export default command;
