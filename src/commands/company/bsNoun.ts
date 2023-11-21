import { Command } from 'commander';

const command = new Command('bsNoun')
  .description(`Returns a random company bs noun.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.bsNoun());
  });

export default command;
