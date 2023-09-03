import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('model')
  .description(`Returns a vehicle model.`)
  .action(() => {
    console.log(faker['vehicle']['model']());
  });

export default command;
