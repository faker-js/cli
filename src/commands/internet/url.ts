import { Command } from 'commander';

const command = new Command('url')
  .description(`Generates a random http(s) url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.url());
  });

export default command;
