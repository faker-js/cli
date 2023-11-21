import { Command } from 'commander';

const command = new Command('cmyk')
  .description(`Returns a CMYK color.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.cmyk());
  });

export default command;
