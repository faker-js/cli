import { Command } from 'commander';

const command = new Command('protocol')
  .description(`Returns a random web protocol. Either \`http\` or \`https\`.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.internet.protocol());
  });

export default command;
