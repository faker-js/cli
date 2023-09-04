import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cron')
  .description(`Generates a random cron expression.`)
  .action(() => {
    console.log(faker.system.cron());
  });

export default command;
