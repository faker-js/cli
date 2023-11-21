import { Command } from 'commander';

const command = new Command('timeZone')
  .description(`Returns a random time zone.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.location.timeZone());
  });

export default command;
