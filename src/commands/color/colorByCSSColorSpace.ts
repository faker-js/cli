import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('colorByCSSColorSpace')
  .description(`Generates a random color based on CSS color space specified.`)
  .action(() => {
    console.log(faker.color.colorByCSSColorSpace());
  });

export default command;
