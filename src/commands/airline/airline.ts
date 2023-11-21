import { Command } from 'commander';

const command = new Command('airline')
  .description(`Generates a random airline.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.airline.airline());
  });

export default command;
