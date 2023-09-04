import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('protocol')
  .description(`Generates a random web protocol. Either \`http\` or \`https\`.`)
  .action(() => {
    console.log(faker.internet.protocol());
  });

export default command;
