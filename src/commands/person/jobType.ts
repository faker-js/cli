import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('jobType')
  .description(`Generates a random job type.`)
  .action(() => {
    console.log(faker.person.jobType());
  });

export default command;
