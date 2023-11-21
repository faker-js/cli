import { Command } from 'commander';

const command = new Command('password')
  .description(
    `Generates a random password-like string. Do not use this method for generating actual passwords for users.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.password());
  });

export default command;
