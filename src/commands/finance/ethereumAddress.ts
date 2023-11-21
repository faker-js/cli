import { Command } from 'commander';

const command = new Command('ethereumAddress')
  .description(
    `Creates a random, non-checksum Ethereum address.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.ethereumAddress());
  });

export default command;
