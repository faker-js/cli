import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('rgb')
  .description(`Generates an RGB color.`)
  .action(() => {
    console.log(faker.color.rgb());
  });

export default command;
