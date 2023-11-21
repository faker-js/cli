import { Command } from 'commander';

const command = new Command('pin')
  .description(`Generates a random PIN number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.pin());
  });

export default command;
