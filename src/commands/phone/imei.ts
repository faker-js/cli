import { Command } from 'commander';

const command = new Command('imei')
  .description(`Generates IMEI number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.phone.imei());
  });

export default command;
