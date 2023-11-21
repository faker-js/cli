import { Command } from 'commander';

const command = new Command('companySuffix')
  .description(`Returns a random company suffix.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.companySuffix());
  });

export default command;
