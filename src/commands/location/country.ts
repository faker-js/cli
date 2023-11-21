import { Command } from 'commander';

const command = new Command('country')
  .description(`Returns a random country name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.country());
  });

export default command;
