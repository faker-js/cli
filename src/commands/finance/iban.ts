import { Command } from 'commander';

const command = new Command('iban')
  .description(`Generates a random iban.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.iban());
  });

export default command;
