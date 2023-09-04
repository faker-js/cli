import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('paragraphs')
  .description(`Generates the given number of paragraphs.`)
  .action(() => {
    console.log(faker.lorem.paragraphs());
  });

export default command;
