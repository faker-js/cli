import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bio')
  .description(`Generates a random short biography`)
  .action(() => {
    console.log(faker.person.bio());
  });

export default command;
