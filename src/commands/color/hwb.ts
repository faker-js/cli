import { Command } from 'commander';

const command = new Command('hwb')
  .description(`Returns an HWB color.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.hwb());
  });

export default command;
