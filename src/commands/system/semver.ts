import { Command } from 'commander';

const command = new Command('semver')
  .description(`Returns a [semantic version](https://semver.org).`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.system.semver());
  });

export default command;
