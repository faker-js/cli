import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('hwb')
  .description(`Generates an HWB color.`)
  .action(() => {
    console.log(faker.color.hwb());
  });

export default command;
