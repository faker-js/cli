import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('unit')
  .description(`Generates a random scientific unit.`)
  .action(() => {
    console.log(faker.science.unit());
  });

export default command;
