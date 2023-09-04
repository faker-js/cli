import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('ethereumAddress')
  .description(`Creates a random, non-checksum Ethereum address.`)
  .action(() => {
    console.log(faker.finance.ethereumAddress());
  });

export default command;
