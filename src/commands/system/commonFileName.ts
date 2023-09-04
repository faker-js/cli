import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('commonFileName')
  .description(`Generates a random file name and a commonly used extension.`)
  .action(() => {
    console.log(faker.system.commonFileName());
  });

export default command;
