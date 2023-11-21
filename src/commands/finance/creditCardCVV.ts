import { Command } from 'commander';

const command = new Command('creditCardCVV')
  .description(`Generates a random credit card CVV.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.creditCardCVV());
  });

export default command;
