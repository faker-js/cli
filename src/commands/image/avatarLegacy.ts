import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('avatarLegacy')
  .description(
    `Generates a random avatar from \`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar\`.`,
  )
  .action(() => {
    console.log(faker.image.avatarLegacy());
  });

export default command;
