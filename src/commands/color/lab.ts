import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lab')
  .description(`Returns a LAB (CIELAB) color.`)
  .action(() => {
    console.log(faker.color.lab());
  });

export default command;
