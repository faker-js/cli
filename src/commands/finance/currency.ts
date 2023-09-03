import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('currency')
  .description(
    `Returns a random currency object, containing \`code\`, \`name \`and \`symbol\` properties.`,
  )
  .action(() => {
    console.log(faker['finance']['currency']());
  });

export default command;
