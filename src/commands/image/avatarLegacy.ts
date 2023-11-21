import { Command } from 'commander';

const command = new Command('avatarLegacy')
  .description(
    `Generates a random avatar from \`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar\`.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.image.avatarLegacy());
  });

export default command;
