import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bitcoinAddress')
  .description(`Generates a random Bitcoin address.`)
  .action(() => {
    console.log(faker.finance.bitcoinAddress());
  });

export default command;
