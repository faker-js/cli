import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('color')
  .description(
    `Generates a random css hex color code in aesthetically pleasing color palette.`,
  )
  .action(() => {
    console.log(faker.internet.color());
  });

export default command;
