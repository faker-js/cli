import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('rabbit')
  .description(`Generates a random rabbit species.`)
  .action(() => {
    console.log(faker.animal.rabbit());
  });

export default command;
