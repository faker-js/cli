import { Command } from 'commander';

const command = new Command('jobArea')
  .description(`Generates a random job area.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.jobArea());
  });

export default command;
