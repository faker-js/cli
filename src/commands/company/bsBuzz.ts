import { Command } from 'commander';

const command = new Command('bsBuzz')
  .description(`Returns a random company bs buzz word.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.bsBuzz());
  });

export default command;
