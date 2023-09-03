import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('nightlife')
  .description(`Generates a random nightlife image url.`)
  .action(() => {
    console.log(faker['image']['nightlife']());
  });

export default command;
