import { Command } from 'commander';

const command = new Command('transport')
  .description(`Generates a random transport image url.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.transport());
  });

export default command;
