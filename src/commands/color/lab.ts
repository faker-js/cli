import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('lab')
  .description(`Generates a LAB (CIELAB) color.`)
  .action(() => {
    console.log(faker.color.lab());
  });

export default command;
