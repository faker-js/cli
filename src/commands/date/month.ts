import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('month')
  .description(`Returns a random name of a month.`)
  .action(() => {
    console.log(faker['date']['month']());
  });

export default command;