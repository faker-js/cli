import { Command } from 'commander';

const command = new Command('department')
  .description(`Returns a department inside a shop.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.commerce.department());
  });

export default command;
