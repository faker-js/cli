import { Command } from 'commander';

const command = new Command('maskedNumber')
  .description(`Generates a random masked number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.maskedNumber());
  });

export default command;
