import { Command } from 'commander';

const command = new Command('rabbit')
  .description(`Returns a random rabbit species.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.animal.rabbit());
  });

export default command;
