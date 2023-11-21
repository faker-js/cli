import { Command } from 'commander';

const command = new Command('cssSupportedSpace')
  .description(`Returns a random css supported color space name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.cssSupportedSpace());
  });

export default command;
