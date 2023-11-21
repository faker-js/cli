import { Command } from 'commander';

const command = new Command('color')
  .description(
    `Generates a random css hex color code in aesthetically pleasing color palette.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.color());
  });

export default command;
