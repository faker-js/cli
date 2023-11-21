import { Command } from 'commander';

const command = new Command('currency')
  .description(
    `Returns a random currency object, containing \`code\`, \`name \`and \`symbol\` properties.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.finance.currency());
  });

export default command;
