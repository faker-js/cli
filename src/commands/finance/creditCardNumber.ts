import { Command } from 'commander';

const command = new Command('creditCardNumber')
  .description(`Generates a random credit card number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.creditCardNumber());
  });

export default command;
