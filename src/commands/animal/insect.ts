import { Command } from 'commander';

const command = new Command('insect')
  .description(`Returns a random insect species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.insect());
  });

export default command;
