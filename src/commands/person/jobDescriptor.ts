import { Command } from 'commander';

const command = new Command('jobDescriptor')
  .description(`Generates a random job descriptor.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.jobDescriptor());
  });

export default command;
