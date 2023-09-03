import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('litecoinAddress')
  .description(`Generates a random Litecoin address.`)
  .action(() => {
    console.log(faker['finance']['litecoinAddress']());
  });

export default command;
