import { Command } from 'commander';

const command = new Command('streetAddress')
  .description(`Generates a random localized street address.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.streetAddress());
  });

export default command;
