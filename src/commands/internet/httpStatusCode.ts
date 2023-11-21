import { Command } from 'commander';

const command = new Command('httpStatusCode')
  .description(`Generates a random HTTP status code.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.httpStatusCode());
  });

export default command;
