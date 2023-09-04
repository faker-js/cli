import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('creditCardCVV')
  .description(`Generates a random credit card CVV.`)
  .action(() => {
    console.log(faker.finance.creditCardCVV());
  });

export default command;
