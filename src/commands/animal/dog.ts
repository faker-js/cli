import { Command } from 'commander';

const command = new Command('dog')
  .description(`Returns a random dog breed.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.dog());
  });

export default command;
