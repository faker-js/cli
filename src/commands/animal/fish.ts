import { Command } from 'commander';

const command = new Command('fish')
  .description(`Returns a random fish species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.fish());
  });

export default command;
