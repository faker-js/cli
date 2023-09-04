import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cssSupportedFunction')
  .description(`Returns a random css supported color function name.`)
  .action(() => {
    console.log(faker.color.cssSupportedFunction());
  });

export default command;
