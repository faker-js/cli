import { Command } from 'commander';

const command = new Command('creditCardIssuer')
  .description(`Returns a random credit card issuer.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.creditCardIssuer());
  });

export default command;
