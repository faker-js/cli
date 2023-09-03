import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('httpMethod')
  .description(`Returns a random http method.`)
  .action(() => {
    console.log(faker['internet']['httpMethod']());
  });

export default command;
