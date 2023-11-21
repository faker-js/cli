import { Command } from 'commander';

const command = new Command('bs')
  .description(`Generates a random company bs phrase.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.company.bs());
  });

export default command;
