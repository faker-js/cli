import { Command } from 'commander';

const command = new Command('cat')
  .description(`Returns a random cat breed.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.cat());
  });

export default command;
