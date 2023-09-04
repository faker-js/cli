import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('hsl')
  .description(`Returns an HSL color.`)
  .action(() => {
    console.log(faker.color.hsl());
  });

export default command;
