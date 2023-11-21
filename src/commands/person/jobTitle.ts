import { Command } from 'commander';

const command = new Command('jobTitle')
  .description(`Generates a random job title.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.jobTitle());
  });

export default command;
