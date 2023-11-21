import { Command } from 'commander';

const command = new Command('horse')
  .description(`Returns a random horse breed.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.horse());
  });

export default command;
