import { Command } from 'commander';

const command = new Command('cssSupportedFunction')
  .description(`Returns a random css supported color function name.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.cssSupportedFunction());
  });

export default command;
