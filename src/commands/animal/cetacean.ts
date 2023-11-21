import { Command } from 'commander';

const command = new Command('cetacean')
  .description(`Returns a random cetacean species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.cetacean());
  });

export default command;
