import { Command } from 'commander';

const command = new Command('bitcoinAddress')
  .description(`Generates a random Bitcoin address.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.bitcoinAddress());
  });

export default command;
