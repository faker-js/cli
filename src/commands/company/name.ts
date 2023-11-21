import { Command } from 'commander';

const command = new Command('name')
  .description(`Generates a random company name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.name());
  });

export default command;
