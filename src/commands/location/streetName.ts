import { Command } from 'commander';

const command = new Command('streetName')
  .description(`Returns a random localized street name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.streetName());
  });

export default command;
