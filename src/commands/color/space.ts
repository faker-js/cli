import { Command } from 'commander';

const command = new Command('space')
  .description(
    `Returns a random color space name from the worldwide accepted color spaces.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.color.space());
  });

export default command;
