import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cssSupportedSpace')
  .description(`Generates a random css supported color space name.`)
  .action(() => {
    console.log(faker.color.cssSupportedSpace());
  });

export default command;
