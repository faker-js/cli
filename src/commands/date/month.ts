import { Command } from 'commander';

const command = new Command('month')
  .description(`Returns a random name of a month.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.date.month());
  });

export default command;
