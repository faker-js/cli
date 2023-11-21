import { Command } from 'commander';

const command = new Command('mac')
  .description(`Generates a random mac address.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.mac());
  });

export default command;
