import { Command } from 'commander';

const command = new Command('sentence')
  .description(
    `Generates a space separated list of words beginning with a capital letter and ending with a period.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.sentence());
  });

export default command;
