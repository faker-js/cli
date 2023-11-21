import { Command } from 'commander';

const command = new Command('colorByCSSColorSpace')
  .description(`Returns a random color based on CSS color space specified.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.colorByCSSColorSpace());
  });

export default command;
