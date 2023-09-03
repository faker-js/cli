import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bs')
  .description(`Generates a random company bs phrase.`)
  .action(() => {
    console.log(faker['company']['bs']());
  });

export default command;
