import { Command } from 'commander';

const command = new Command('number')
  .description(`Generates a random phone number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.phone.number());
  });

export default command;
