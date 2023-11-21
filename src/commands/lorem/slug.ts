import { Command } from 'commander';

const command = new Command('slug')
  .description(
    `Generates a slugified text consisting of the given number of hyphen separated words.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.lorem.slug());
  });

export default command;
