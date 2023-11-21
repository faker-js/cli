import { Command } from 'commander';

const command = new Command('cron')
  .description(`Returns a random cron expression.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.cron());
  });

export default command;
