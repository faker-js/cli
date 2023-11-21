import { Command } from 'commander';

const command = new Command('routingNumber')
  .description(`Generates a random routing number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.routingNumber());
  });

export default command;
