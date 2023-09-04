import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('routingNumber')
  .description(`Generates a random routing number.`)
  .action(() => {
    console.log(faker.finance.routingNumber());
  });

export default command;
