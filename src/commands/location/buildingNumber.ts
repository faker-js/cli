import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('buildingNumber')
  .description(`Generates a random building number.`)
  .action(() => {
    console.log(faker['location']['buildingNumber']());
  });

export default command;
