import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('sentence')
  .description(
    `Generates a space separated list of words beginning with a capital letter and ending with a period.`,
  )
  .action(() => {
    console.log(faker['lorem']['sentence']());
  });

export default command;
