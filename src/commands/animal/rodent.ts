import { Command } from 'commander';

const command = new Command('rodent')
  .description(`Returns a random rodent breed.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.rodent());
  });

export default command;
