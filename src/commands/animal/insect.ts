import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('insect')
  .description(`Returns a random insect species.`)
  .action(() => {
    console.log(faker.animal.insect());
  });

export default command;
