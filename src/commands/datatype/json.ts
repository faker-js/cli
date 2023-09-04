import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('json')
  .description(
    `Returns a string representing JSON object with 7 pre-defined properties.`,
  )
  .action(() => {
    console.log(faker.datatype.json());
  });

export default command;
