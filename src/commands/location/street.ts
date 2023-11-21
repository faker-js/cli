import { Command } from 'commander';

const command = new Command('street')
  .description(`Generates a random localized street name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.street());
  });

export default command;
