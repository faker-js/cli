import { Command } from 'commander';

const command = new Command('bsAdjective')
  .description(`Returns a random company bs adjective.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.bsAdjective());
  });

export default command;
