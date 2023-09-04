import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('imei')
  .description(`Generates IMEI number.`)
  .action(() => {
    console.log(faker.phone.imei());
  });

export default command;
