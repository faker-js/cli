import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('business')
  .description(`Generates a random business image url.`)
  .action(() => {
    console.log(faker.image.business());
  });

export default command;
