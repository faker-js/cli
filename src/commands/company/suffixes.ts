import { Command } from 'commander';

const command = new Command('suffixes')
  .description(`Returns an array with possible company name suffixes.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.suffixes());
  });

export default command;
