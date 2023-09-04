import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('cmyk')
  .description(`Generates a CMYK color.`)
  .action(() => {
    console.log(faker.color.cmyk());
  });

export default command;
