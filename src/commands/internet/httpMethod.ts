import { Command } from 'commander';

const command = new Command('httpMethod')
  .description(
    `Returns a random http method.
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.httpMethod());
  });

export default command;
