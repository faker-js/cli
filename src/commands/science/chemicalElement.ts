import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('chemicalElement')
  .description(`Generates a random periodic table element.`)
  .action(() => {
    console.log(faker.science.chemicalElement());
  });

export default command;
