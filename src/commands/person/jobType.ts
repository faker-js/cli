import { Command } from 'commander';

const command = new Command('jobType')
  .description(`Generates a random job type.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.jobType());
  });

export default command;
