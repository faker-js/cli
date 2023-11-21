import { Command } from 'commander';

const command = new Command('port')
  .description(`Generates a random port number.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.port());
  });

export default command;
