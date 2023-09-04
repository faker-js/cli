import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('jobTitle')
  .description(`Generates a random job title.`)
  .action(() => {
    console.log(faker.person.jobTitle());
  });

export default command;
