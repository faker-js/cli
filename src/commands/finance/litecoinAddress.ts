import { Command } from 'commander';

const command = new Command('litecoinAddress')
  .description(`Generates a random Litecoin address.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.litecoinAddress());
  });

export default command;
