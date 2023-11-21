import { Command } from 'commander';

const command = new Command('weekday')
  .description(`Returns a random day of the week.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.date.weekday());
  });

export default command;
